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

  var init = function() {
      var carousel = document.getElementById('carousel'),
          navButtons = document.querySelectorAll('#navigation button'),
          panelCount = carousel.children.length,
          
          theta = 0,
          onNavButtonClick = function( event ){
            var increment = parseInt(event.currentTarget.getAttribute('data-increment'));
            theta += ( 360 / panelCount ) * increment;
            carousel.style.transform = 'translateZ( -288px ) rotateY(' + theta + 'deg)';
          };

      for (var i=0; i < 2; i++) {
        navButtons[i].addEventListener( 'click', onNavButtonClick, false);
      }
    };
    init();
  
});