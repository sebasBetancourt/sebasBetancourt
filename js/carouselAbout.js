export const carouselAbout = ()=>{
  const figures = document.querySelectorAll('#carousel figure');
  const prevButton = document.querySelector('.previousAbout');
  const nextButton = document.querySelector('.nextAbout');
  let currentIndex = 0;

  function showFigure(index) {
    figures.forEach((figure, i) => {
      figure.classList.remove('active', 'exit');
      if (i === index) {
        figure.classList.add('active');
      } else if (i === currentIndex) {
        figure.classList.add('exit');
      }
    });
    currentIndex = index;
  }

  prevButton.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + figures.length) % figures.length;
    showFigure(newIndex);
  });

  nextButton.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % figures.length;
    showFigure(newIndex);
  });

  showFigure(currentIndex);
}