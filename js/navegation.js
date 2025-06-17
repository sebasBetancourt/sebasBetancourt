export const navegation = ()=>{
    const nav = document.querySelector("#nav")
    const navRedirection = document.querySelector("#navRedirection")
    const navLi = document.querySelector("#navLi")
    const navA = document.querySelector("#navA")
    const lightMode = document.querySelector("#lightMode")
    const navItems = document.querySelectorAll("#navRedirection li");
      

    //Efect Navegation Label
    navItems.forEach((li) => {
      const link = li.querySelector("a");
    
      li.addEventListener("mouseenter", () => {
        if (!li.querySelector("label")) {
          const label = document.createElement("label");
          label.textContent = link.getAttribute("title");
          link.appendChild(label);
          nav.style.width = '35em'
        }
    
        const label = li.querySelector("label");
        label.style.opacity = "1";
      });
    
      li.addEventListener("mouseleave", () => {
        const label = li.querySelector("label");
        if (label) label.remove(), nav.style.width = '30em';
      });
    });


    const text = "Hi, I am Sebastian Betancourt. Software DEVELOPER.";
    const typedText = document.getElementById("typedText");

    let i = 0;
    let isDeleting = false;

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
    typeWriter()


    //Ver Hora, Fecha, CIudad y CLima
    async function cargarDatos() {
        const info = document.getElementById("info");
  
        try {
          const resUbicacion = await fetch("http://ip-api.com/json/");
          const dataUbicacion = await resUbicacion.json();
  
          const { city, country, lat, lon, timezone } = dataUbicacion;
  
          const resClima = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
          const dataClima = await resClima.json();
  
          const temp = dataClima.current_weather.temperature;
          const wind = dataClima.current_weather.windspeed;
  
          const fecha = new Date().toLocaleDateString("es-ES", { timeZone: timezone });
          const hora = new Date().toLocaleTimeString("es-ES", {
            timeZone: timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true 
          });
          
          info.innerHTML = `
            <p>${city}, ${country}</p>
            <p><strong>Date </strong> ${fecha}, ${hora}</p>
          `;
        } catch (error) {
          info.innerHTML = `<p>Error al cargar datos: ${error.message}</p>`;
        }
      }
      
  
      cargarDatos();  


      
};