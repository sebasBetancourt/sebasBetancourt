"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { LayoutGrid, Box } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { useMediaQuery } from "@/lib/useMediaQuery";
import type { ContributionDay, GithubActivity } from "@/lib/github";

// Three.js solo se descarga cuando se elige la vista 3D
const Contributions3D = dynamic(() => import("./Contributions3D"), {
  ssr: false,
  loading: () => <div className="h-[300px] lg:h-[340px] w-full rounded-lg bg-white/[0.03] animate-pulse" />,
});

const GITHUB_USER = "sebasBetancourt";
const LEVEL_COLORS = ["rgba(255,255,255,0.05)", "#3b1f5c", "#6b2fa8", "#b5359f", "#FF2D8D"];

const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;
const LEFT = 30;
const TOP = 18;

const toUTCDate = (date: string) => new Date(`${date}T00:00:00Z`);

function buildWeeks(days: ContributionDay[]) {
  if (days.length === 0) return [];
  const padded: (ContributionDay | null)[] = [
    ...Array<null>(toUTCDate(days[0].date).getUTCDay()).fill(null),
    ...days,
  ];
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
  return weeks;
}

function computeStreaks(days: ContributionDay[]) {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }

  let current = 0;
  let i = days.length - 1;
  if (i >= 0 && days[i].count === 0) i--; // today may not have contributions yet
  for (; i >= 0 && days[i].count > 0; i--) current++;

  const best = days.reduce<ContributionDay | null>((max, d) => (!max || d.count > max.count ? d : max), null);
  return { current, longest, best };
}

export function GithubContributions() {
  const { lang, t } = useLang();
  const [data, setData] = useState<GithubActivity | null>(null);
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState<ContributionDay | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<"grid" | "3d">("3d");
  // La vista 3D solo se ofrece en escritorio; en celular siempre se ve la grilla
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const show3d = view === "3d" && isDesktop;

  const locale = lang === "es" ? "es-CO" : "en-US";
  const num = useMemo(() => new Intl.NumberFormat(locale), [locale]);
  const fullDate = useMemo(
    () => new Intl.DateTimeFormat(locale, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }),
    [locale],
  );
  const longDate = useMemo(
    () => new Intl.DateTimeFormat(locale, { month: "long", day: "numeric", timeZone: "UTC" }),
    [locale],
  );

  useEffect(() => {
    fetch("/api/github")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((json: GithubActivity) => setData(json))
      .catch(() => setFailed(true));
  }, []);

  useEffect(() => {
    if (data && scrollRef.current) scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
  }, [data]);

  const weeks = useMemo(() => buildWeeks(data?.days ?? []), [data]);
  const streaks = useMemo(() => computeStreaks(data?.days ?? []), [data]);

  const monthLabels = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" });
    const labels: { x: number; label: string }[] = [];
    let prevMonth = -1;
    weeks.forEach((week, col) => {
      const first = week.find(Boolean);
      if (!first) return;
      const month = toUTCDate(first.date).getUTCMonth();
      if (month !== prevMonth && col < weeks.length - 2) {
        labels.push({ x: LEFT + col * STEP, label: fmt.format(toUTCDate(first.date)) });
      }
      prevMonth = month;
    });
    return labels.filter((l, i) => i !== 0 || (labels[1]?.x ?? Infinity) - l.x >= STEP * 3);
  }, [weeks, locale]);

  const monthLabels3d = useMemo(
    () => monthLabels.map((m) => ({ col: (m.x - LEFT) / STEP, label: m.label })),
    [monthLabels],
  );

  const weekdayLabels = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(locale, { weekday: "short", timeZone: "UTC" });
    // 2024-01-01 was a Monday
    return [1, 3, 5].map((row) => ({ row, label: fmt.format(toUTCDate(`2024-01-0${row}`)) }));
  }, [locale]);

  const svgWidth = LEFT + weeks.length * STEP;
  const svgHeight = TOP + 7 * STEP;
  const dayText = (d: ContributionDay) => `${num.format(d.count)} ${t.experience.contributionsOn} ${fullDate.format(toUTCDate(d.date))}`;


  return (
    <section className="w-full pb-32 pt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="font-instrument" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.1 }}>
          <span className="text-white">{t.experience.codeTitle[0]}</span>
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #FF2D8D, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.experience.codeTitle[1]}
          </span>
        </h2>
      </div>

      {/* Contributions Card */}
      <div className="mx-4 md:mx-6 rounded-2xl border border-white/10 bg-neutral-950 overflow-hidden">
        <div className="p-6 md:p-8">
          {/* Perfil */}
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <img
              src={data?.avatarUrl ?? `https://github.com/${GITHUB_USER}.png`}
              alt={GITHUB_USER}
              className="w-11 h-11 rounded-xl border border-white/10 object-cover"
            />
            <div className="leading-tight">
              <p className="text-white text-sm font-medium group-hover:underline">@{GITHUB_USER}</p>
              <p className="flex items-center gap-1 text-neutral-500 text-[10px] uppercase tracking-widest">
                GitHub <FaArrowUpRightFromSquare className="w-2 h-2" />
              </p>
            </div>
          </a>

          {/* Resumen + toggle */}
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-instrument text-white text-5xl md:text-6xl leading-none">
                  {data ? num.format(data.totalContributions) : "—"}
                </span>
                <span className="text-neutral-400 text-base">{t.experience.contributions}</span>
              </p>
              {streaks.best && streaks.best.count > 0 && (
                <p className="mt-3 text-sm text-neutral-400">
                  {t.experience.busiestOn}{" "}
                  <span className="text-white">{longDate.format(toUTCDate(streaks.best.date))}</span>{" "}
                  {t.experience.withCount} <span className="text-white">{num.format(streaks.best.count)}</span>{" "}
                  {t.experience.inADay}
                </p>
              )}
              {streaks.longest > 0 && (
                <p className="mt-3 flex items-baseline gap-2">
                  <span className="text-white text-sm font-semibold">{num.format(streaks.longest)}</span>
                  <span className="text-neutral-500 text-[10px] uppercase tracking-widest">{t.experience.bestStreak}</span>
                </p>
              )}
            </div>

            {/* Toggle grilla / 3D (solo escritorio) */}
            <div role="group" aria-label={t.experience.viewMode} className="hidden md:flex items-center gap-0.5 rounded-lg border border-white/10 p-0.5">
              {([
                { id: "grid", label: t.experience.gridView, Icon: LayoutGrid },
                { id: "3d", label: t.experience.view3d, Icon: Box },
              ] as const).map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setView(id)}
                  aria-pressed={view === id}
                  aria-label={label}
                  title={label}
                  className={`rounded-md p-1.5 transition-colors cursor-pointer ${
                    view === id ? "bg-white text-black" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Gráfico */}
          <div className="mt-6">
            {data && show3d ? (
              <Contributions3D
                weeks={weeks}
                colors={LEVEL_COLORS}
                monthLabels={monthLabels3d}
                onHover={setHovered}
              />
            ) : (
              <div ref={scrollRef} className="overflow-x-auto">
                {data ? (
                  <svg
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    className="w-full min-w-[640px] h-auto"
                    role="img"
                    aria-label={`${num.format(data.totalContributions)} ${t.experience.contributions}`}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {monthLabels.map((m) => (
                      <text key={m.x} x={m.x} y={10} className="fill-neutral-500" fontSize={9}>
                        {m.label}
                      </text>
                    ))}
                    {weekdayLabels.map((w) => (
                      <text key={w.row} x={0} y={TOP + w.row * STEP + CELL - 2} className="fill-neutral-500" fontSize={9}>
                        {w.label}
                      </text>
                    ))}
                    {weeks.map((week, col) =>
                      week.map((day, row) =>
                        day ? (
                          <rect
                            key={day.date}
                            x={LEFT + col * STEP}
                            y={TOP + row * STEP}
                            width={CELL}
                            height={CELL}
                            rx={2.5}
                            fill={LEVEL_COLORS[day.level]}
                            stroke={hovered?.date === day.date ? "#fff" : "none"}
                            strokeWidth={1}
                            onMouseEnter={() => setHovered(day)}
                            onClick={() => setHovered(day)}
                          >
                            <title>{dayText(day)}</title>
                          </rect>
                        ) : null,
                      ),
                    )}
                  </svg>
                ) : (
                  <div className="w-full min-w-[640px] aspect-[53/8] rounded-lg bg-white/[0.03] animate-pulse flex items-center justify-center">
                    {failed && <p className="text-neutral-500 text-xs">{t.experience.unavailable}</p>}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 mt-4 text-[10px] font-mono uppercase text-neutral-500 tracking-widest">
            <p className="min-h-[1em]">
              {hovered ? dayText(hovered) : show3d ? t.experience.dragHint : t.experience.hoverHint}
            </p>
            <div className="flex items-center gap-1">
              <span className="mr-1">{t.experience.less}</span>
              {LEVEL_COLORS.map((color) => (
                <span key={color} className="w-[10px] h-[10px] rounded-[2px]" style={{ background: color }} />
              ))}
              <span className="ml-1">{t.experience.more}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

