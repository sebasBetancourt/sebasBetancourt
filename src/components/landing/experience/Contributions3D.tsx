"use client";

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Color, InstancedMesh, Object3D, OrthographicCamera, Vector3 } from "three";
import { Canvas, useThree, type ThreeEvent } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import type { ContributionDay } from "@/lib/github";

type Week = (ContributionDay | null)[];

type Props = {
  weeks: Week[];
  colors: string[];
  monthLabels: { col: number; label: string }[];
  onHover: (day: ContributionDay | null) => void;
};

const CELL = 0.9;
const MIN_HEIGHT = 0.35; // los días sin contribuciones se ven como bloques bajos
const LEVEL_STEP = 1.6; // altura por nivel (0-4), como los cuartiles de GitHub
const COUNT_BONUS = 1.6; // altura extra según el número real de contribuciones
const MAX_HEIGHT = MIN_HEIGHT + 4 * LEVEL_STEP + COUNT_BONUS;
// La cámara apunta al centro del gráfico (no a su base) para que llene el canvas
const TARGET_Y = MAX_HEIGHT * 0.3;
// Vista inicial: de frente desde la derecha (~25°) y un poco elevada (~30°), como el gráfico de GitHub
const CAMERA_POSITION: [number, number, number] = [18, 25 + TARGET_Y, 39];
// El nivel 0 del heatmap 2D es transparente; en 3D necesita un color sólido
const EMPTY_COLOR = "#1c1a22";
const HOVER_COLOR = "#ffffff";

type Bar = { day: ContributionDay; x: number; z: number; height: number };

function useBars(weeks: Week[]) {
  return useMemo(() => {
    const max = Math.max(1, ...weeks.flat().map((d) => d?.count ?? 0));
    const bars: Bar[] = [];
    weeks.forEach((week, col) =>
      week.forEach((day, row) => {
        if (!day) return;
        // El nivel da la altura base (así un día récord no aplasta al resto) y el conteo la afina
        const height = MIN_HEIGHT + day.level * LEVEL_STEP + Math.sqrt(day.count / max) * COUNT_BONUS;
        bars.push({ day, x: col, z: row, height });
      }),
    );
    return bars;
  }, [weeks]);
}

function Bars({ bars, colors, center, onHover }: { bars: Bar[]; colors: string[]; center: [number, number]; onHover: Props["onHover"] }) {
  const mesh = useRef<InstancedMesh>(null);
  const hovered = useRef<number | null>(null);

  const baseColor = (i: number) => new Color(bars[i].day.level === 0 ? EMPTY_COLOR : colors[bars[i].day.level]);

  useLayoutEffect(() => {
    const m = mesh.current;
    if (!m) return;
    const dummy = new Object3D();
    bars.forEach((bar, i) => {
      dummy.position.set(bar.x - center[0], bar.height / 2, bar.z - center[1]);
      dummy.scale.set(CELL, bar.height, CELL);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
      m.setColorAt(i, baseColor(i));
    });
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bars, colors, center]);

  const setHovered = (index: number | null) => {
    const m = mesh.current;
    if (!m || hovered.current === index) return;
    if (hovered.current !== null) m.setColorAt(hovered.current, baseColor(hovered.current));
    if (index !== null) m.setColorAt(index, new Color(HOVER_COLOR));
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    hovered.current = index;
    onHover(index === null ? null : bars[index].day);
  };

  return (
    <instancedMesh
      ref={mesh}
      args={[undefined, undefined, bars.length]}
      onPointerMove={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHovered(e.instanceId ?? null);
      }}
      onPointerOut={() => setHovered(null)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.55} metalness={0.1} />
    </instancedMesh>
  );
}

// Encuadra el gráfico: parte siempre de la vista inicial, proyecta las esquinas reales del gráfico
// sobre los ejes de la cámara, centra la cámara en ese recuadro y ajusta el zoom para llenar el canvas.
// resetKey cambia con el doble clic y vuelve a la vista inicial.
function FitCamera({ width, height, resetKey }: { width: number; height: number; resetKey: number }) {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  const controls = useThree((s) => s.controls) as { target?: Vector3; update?: () => void } | null;

  useEffect(() => {
    if (!(camera instanceof OrthographicCamera)) return;
    const target = new Vector3(0, TARGET_Y, 0);
    camera.position.set(...CAMERA_POSITION);
    camera.lookAt(target);
    camera.updateMatrixWorld();

    const right = new Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const up = new Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const x of [-width / 2, width / 2])
      for (const y of [0, height])
        for (const z of [-3.5, 3.5]) {
          const corner = new Vector3(x, y, z).sub(target);
          minX = Math.min(minX, corner.dot(right)); maxX = Math.max(maxX, corner.dot(right));
          minY = Math.min(minY, corner.dot(up)); maxY = Math.max(maxY, corner.dot(up));
        }

    // Desplaza cámara y objetivo para que el centro del recuadro quede en el centro del canvas
    const offset = right.multiplyScalar((minX + maxX) / 2).add(up.multiplyScalar((minY + maxY) / 2));
    camera.position.add(offset);
    target.add(offset);
    camera.lookAt(target);
    if (controls?.target) {
      controls.target.copy(target);
      controls.update?.();
    }

    camera.zoom = Math.min(size.width / ((maxX - minX) * 1.03), size.height / ((maxY - minY) * 1.06));
    camera.updateProjectionMatrix();
  }, [camera, controls, size.width, size.height, width, height, resetKey]);
  return null;
}

export default function Contributions3D({ weeks, colors, monthLabels, onHover }: Props) {
  const bars = useBars(weeks);
  const maxBarHeight = useMemo(() => Math.max(MIN_HEIGHT, ...bars.map((b) => b.height)), [bars]);
  const [resetKey, setResetKey] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Es la vista por defecto: el canvas (WebGL) se monta solo cuando la sección llega a la pantalla
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const center: [number, number] = useMemo(() => [(weeks.length - 1) / 2, 3], [weeks.length]);

  return (
    <div
      ref={container}
      className="h-[300px] lg:h-[340px] w-full cursor-grab active:cursor-grabbing"
      onDoubleClick={() => setResetKey((k) => k + 1)}
      onMouseLeave={() => onHover(null)}
    >
      {visible && (
      <Canvas orthographic camera={{ position: CAMERA_POSITION, near: -500, far: 500 }} dpr={[1, 2]}>
        <FitCamera width={weeks.length} height={maxBarHeight} resetKey={resetKey} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[-20, 40, 25]} intensity={1.4} />
        <directionalLight position={[25, 10, -20]} intensity={0.35} />

        <Bars bars={bars} colors={colors} center={center} onHover={onHover} />

        {monthLabels.map((m) => (
          <Html
            key={`${m.col}-${m.label}`}
            position={[m.col - center[0], 0, 7.4 - center[1]]}
            center
            style={{ pointerEvents: "none" }}
          >
            <span className="text-[9px] text-neutral-500 whitespace-nowrap">{m.label}</span>
          </Html>
        ))}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.2}
          makeDefault
        />
      </Canvas>
      )}
    </div>
  );
}
