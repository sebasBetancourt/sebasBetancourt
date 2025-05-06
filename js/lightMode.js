export const lightMode = ()=>{
    const button = document.querySelector('#lightMode')
    const h1 = document.querySelector('.typeWriter')
    const buttonAboutMore = document.querySelector('.buttonAboutMore')
    const cursor = document.querySelector('.cursor')
    const imgButton = document.querySelector('#imgButton')

    button.addEventListener("click", function(){
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
                color: 0x40909,
                size: 1.20,
                backgroundColor: 0xe1e1e1
            });
          }
          document.body.style.background = '#e1e1e1'
          h1.style.color = 'black'
          buttonAboutMore.style.background = 'black'
          buttonAboutMore.style.color = 'white'
          cursor.style.color = 'black'
          imgButton.src = '../storage/img/dark_mode.svg'
          imgButton.styles.color = 'black'
    })



}