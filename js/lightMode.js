export const lightMode = () => {
  const button = document.querySelector('#lightMode');
  const body = document.body;
  const imgButton = document.querySelector('#imgButton');
  let vantaEffect; // Variable para almacenar el efecto VANTA

  button.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
      // Modo light: Cambiar VANTA a colores claros
      if (vantaEffect) vantaEffect.destroy(); // Destruir el efecto anterior
      vantaEffect = VANTA.GLOBE({
        el: "#Home",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x40909,
        size: 1.20,
        backgroundColor: 0xe1e1e1
      });
      imgButton.src = './storage/img/dark_mode.svg'; // Cambiar ícono a dark mode
    } else {
      // Modo dark: Volver a colores oscuros
      if (vantaEffect) vantaEffect.destroy();
      vantaEffect = VANTA.GLOBE({
        el: "#Home",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f9cff,
        color2: 0x1e3d8,
        backgroundColor: 0x0
      });
      imgButton.src = './storage/img/light_mode.svg'; // Cambiar ícono a light mode
    }
  });
};