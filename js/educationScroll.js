export function educationScroll() {
    const boxes = document.querySelectorAll('.boxEducation');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.6; 

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom && boxTop > -box.offsetHeight) {
                box.classList.add('visible');
            } else {
                box.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
}