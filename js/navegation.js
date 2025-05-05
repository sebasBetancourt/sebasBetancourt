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
        }
    
        const label = li.querySelector("label");
        label.style.opacity = "1";
      });
    
      li.addEventListener("mouseleave", () => {
        const label = li.querySelector("label");
        if (label) label.remove();
      });
    });


    //
      
      
};