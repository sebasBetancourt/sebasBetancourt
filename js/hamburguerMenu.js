export const hamburgerMenu = () => {
  const hamburger = document.createElement('button');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  document.querySelector('header').prepend(hamburger);
  
  const nav = document.querySelector('nav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav__ul li a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });
};