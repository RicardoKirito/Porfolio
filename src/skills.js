import { randomReveal, reveal } from "./assets/helpers/animation.js";

const change = document.querySelector("#change");
const title = document.querySelector(".skill-title")
const cr = change.getBoundingClientRect();
const gallery = document.querySelector(".projects .gallery");
let about = false;
document.addEventListener("wheel", e=>{


    if(parseInt(visualViewport.height-change.getBoundingClientRect().bottom)>-100 && e.deltaY>0 && !about){
        about = true;
        disableScroll();
  
        setTimeout(function() {
          enableScroll();
        }, 800); 

        reveal(title, "ABOUT", 700)
    }
    if(parseInt(visualViewport.height-change.getBoundingClientRect().bottom)<-100 && e.deltaY<0 && about){
        about = false;
        disableScroll();
  
        setTimeout(function() {
          enableScroll();
        }, 800); 
        reveal(title, "MY SKILLS", 700)
    }
    
})

function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  // Habilitar el desplazamiento
  function enableScroll() {
    document.body.style.overflow = '';
  }
  
  // Evento que deshabilita el desplazamiento por 30 segundos
    
const projects = [
  {
    title: "Web bank app",
    tegnologies: ["ASPE.NET", "EntityFramework"],
    imgsrl: "./src/assets/img/BankGuard.png",
    description: "This proyect was created to showcase my ASP.NET habilities using SQL as my database to storage the app information",
  },
  {
    title: "Web bank app",
    tegnologies: ["ASPE.NET", "EntityFramework"],
    imgsrl: "",
    description: "This proyect was created to showcase my ASP.NET habilities using SQL as my database to storage the app information",
  },
  {
    title: "Web bank app",
    tegnologies: ["ASPE.NET", "EntityFramework"],
    imgsrl: "",
    description: "This proyect was created to showcase my ASP.NET habilities using SQL as my database to storage the app information"
  },
  {
    title: "Web bank app",
    tegnologies: ["ASPE.NET", "EntityFramework"],
    imgsrl: "",
    description: "This proyect was created to showcase my ASP.NET habilities using SQL as my database to storage the app information",
  }
]

projects.forEach(project => {
  gallery.innerHTML += `
  
  <div class="project">
    <div class="bg-df">
        <figure>
            <img src="${project.imgsrl}" alt="">
        </figure>
    </div>
    <div class='project-d'>
        <span class="pj-title">${project.title}</span>
        <p>${project.description}</p>
        <div class="flex-row tech-container">
          <span class="tegnologies">${project.tegnologies[0]}</span>
          <span class="devider"></span>
          <span class="tegnologies">${project.tegnologies[1]}</span>
        </div>
    </div>
  </div>
  
  `
});

