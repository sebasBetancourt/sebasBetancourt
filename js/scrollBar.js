export function timelineProgress() {
  const section = document.getElementById("educationSection");
  const fill = document.getElementById("timelineFill");
  if (!section || !fill) return;

  function update() {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    // progreso dentro de la sección
    let progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);

    // clamp 0 → 1
    progress = Math.max(0, Math.min(progress, 1));

    fill.style.height = progress * 110 + "%";
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
