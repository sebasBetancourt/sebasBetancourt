export const scrollAnimation = () => {
    const navLinks = document.querySelectorAll('#navRedirection a');
    const sections = document.querySelectorAll('section');
    
    const animateSection = (section) => {
      section.classList.add('section-animate');
      
      const animatableElements = section.querySelectorAll('h2, h3, article, aside');
      animatableElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('element-animate');
        }, 200 * index);
      });
    };
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          navLinks.forEach(navLink => {
            navLink.parentElement.classList.remove('active');
          });
          link.parentElement.classList.add('active');
          
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            animateSection(targetSection);
          }, 500); 
        }
      });
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
              });
              link.parentElement.classList.add('active');
            }
          });
          
          animateSection(entry.target);
        }
      });
    }, {
      threshold: 0.1 
    });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  };