import { navegation } from './navegation.js';
import { scrollAnimation } from './scrollAnimation.js';
import { lightMode } from './lightMode.js';
import { gsapScroll } from './gsapScroll.js';
import { carouselAbout } from './carouselAbout.js';
import { slideSkills } from './slideSkills.js';
import { educationScroll } from './educationScroll.js';
import { contactanos } from './contactanos.js';
import { hamburgerMenu } from './hamburguerMenu.js';
import { timelineProgress } from './scrollBar.js';

document.addEventListener('DOMContentLoaded', () => {
timelineProgress();
  scrollAnimation();
  navegation();
  gsapScroll();
  lightMode();
  carouselAbout();
  slideSkills();
  educationScroll();
  hamburgerMenu();
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
});