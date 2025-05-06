import { navegation } from './navegation.js';
import { scrollAnimation } from './scrollAnimation.js';
import { lightMode } from './lightMode.js';

document.addEventListener('DOMContentLoaded', () => {
  
  scrollAnimation();
  navegation();



  if (window.VANTA) {
    window.VANTA.GLOBE({
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
  }


  lightMode()


  const images = document.querySelectorAll('.carousel-image')
  const radius = 242
  const progress = {
    value: 0
  }
  const carousel = document.querySelector('.carousel')
  
  Observer.create({
    target: carousel,
    type: "wheel,pointer",
    onPress: (self) => {
      carousel.style.cursor = 'grabbing'
    },
    onRelease: (self) => {
      carousel.style.cursor = 'grab'
    },
    onChange: (self) => {
      gsap.killTweensOf(progress)
      const p = self.event.type === 'wheel' ? self.deltaY * -.0005 : self.deltaX * .05
      gsap.to(progress, {
        duration: 2,
        ease: 'power4.out',
        value: `+=${p}`
      })
    }
  })
  
  const animate = () => {
    images.forEach((image, index) => {
      const theta = index / images.length - progress.value
      const x = -Math.sin(theta * Math.PI * 2) * radius
      const y = Math.cos(theta * Math.PI * 2) * radius
      image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta }deg)`
      const c = Math.floor(index/images.length * 360)
      image.style.background = `hsla(${c}, 90%, 50%, .5)`
    })
  }
  gsap.ticker.add(animate)
  
});