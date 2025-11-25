export const navegation = () => {
  const nav = document.querySelector("#nav");
  const navItems = document.querySelectorAll("#navRedirection li");
  const typedText = document.getElementById("typedText");
  let i = 0;
  let isDeleting = false;
  let timezone = null;
  let lat = null;
  let lon = null;

  // --- NAV EFFECT ---
  navItems.forEach((li) => {
    const link = li.querySelector("a");
    li.addEventListener("mouseenter", () => {
      if (!li.querySelector("label")) {
        const label = document.createElement("label");
        label.textContent = link.getAttribute("title");
        link.appendChild(label);
        nav.style.width = "35em";
      }
      const label = li.querySelector("label");
      label.style.opacity = "1";
    });
    li.addEventListener("mouseleave", () => {
      const label = li.querySelector("label");
      if (label) label.remove(), (nav.style.width = "30em");
    });
  });

  // --- TYPEWRITER ---
  const text = "Hola, Soy Sebastian Betancourt. Desarrollador de Software.";
  function typeWriter() {
    if (!isDeleting) {
      typedText.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(typeWriter, 60);
      } else {
        isDeleting = true;
        setTimeout(typeWriter, 3500);
      }
    } else {
      i--;
      typedText.textContent = text.slice(0, i);
      if (i >= 0) {
        setTimeout(typeWriter, 50);
      } else {
        isDeleting = false;
        setTimeout(typeWriter, 1500);
      }
    }
  }
  typeWriter();
};
