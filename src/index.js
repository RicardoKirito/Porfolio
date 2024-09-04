import { findParent, servicesAction, servicetEv } from "./about.js";
import { currentPage, goTO } from "./assets/helpers/router.js";
import { langScript } from "./lang.js";
import { addProjects, addScroll } from "./skills.js";

document.addEventListener("DOMContentLoaded", () => {

  //Remove loader
  window.addEventListener('load', e=>{
    setTimeout(()=>{
      document.querySelector(".page-loader").style.animation="scale-up-hor-left .5s cubic-bezier(1, 0.28, 0.28, 0.98) forwards"

    },2000)
  })
  //Email Form
  const i = document.querySelector(".gallery horizontal-scroll");
  const form = document.querySelector("#email-form");

  setInterval(() => {
    const time = document.querySelector(".time");
    if (time) {
      time.textContent = new Date(Date.now()).toLocaleString(
        navigator.language,
        {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );
    }
  }, 1000);

  function formValidate(e) {
    if (e.value === "") return `Please provide a valid ${e.id}`;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.elements.email;
    const name = e.target.elements.name;
    const body = e.target.elements.description;
    const tosumit = e.target.elements.tosubmit;

    const param = {
      email_id: email.value,
      from_name: name.value,
      message: body.value,
    };
    emailjs.send("service_gjou5ti", "template_7vpuhps", param).then((res) => {
      if (res.status === 200) {
        email.value = "";
        name.value = "";
        body.value = "";
        tosumit.value = langScript.placeholder.send1.text;
        tosumit.style.backgroundColor = "lightseagreen";
        setTimeout(() => {
          tosumit.value = langScript.placeholder.send.text;
          tosumit.style.backgroundColor = "";
        }, 3000);
      } else {
        tosumit.value = langScript.placeholder.send2.text;
        tosumit.style.backgroundColor = "salmon";
        setTimeout(() => {
          tosumit.value = langScript.placeholder.send.text;
          tosumit.style.backgroundColor = "";
        }, 3000);
      }
    });
  });
  addProjects()
  document.addEventListener("click", async e=>{
    const loaderpage =document.querySelector(".page-loader")
    
    if(e.target.matches("#navI")){

      loaderpage.style.animation="scale-up-hor-right .5s cubic-bezier(1, 0.28, 0.28, 0.98) forwards"
      const loader = loaderpage.querySelector(".loader")
      const loadertittle = loaderpage.querySelector("#loadertittle")
      
      if(loader) loader.remove()
      loadertittle.textContent = 'HOME';
      setTimeout(()=>{
        goTO('home');
        addScroll()
        loadertittle.textContent = '';
        loaderpage.style.animation="scale-up-hor-left 1s cubic-bezier(1, 0.28, 0.28, 0.98) forwards"     
        
      }, 1000)
      
    }
    if(e.target.matches("#navA") || findParent(e.target, 'navAb', 'id')){
      const loader = loaderpage.querySelector(".loader")
      const loadertittle = loaderpage.querySelector("#loadertittle")
      
      loaderpage.style.animation="scale-up-hor-right .5s cubic-bezier(1, 0.28, 0.28, 0.98) forwards"
      if(loader) loader.remove()
      loadertittle.textContent = 'ABOUT';
      setTimeout(()=>{
        goTO('about');
        servicesAction()
        loadertittle.textContent = '';
        loaderpage.style.animation="scale-up-hor-left 1s cubic-bezier(1, 0.28, 0.28, 0.98) forwards"
        
      }, 1000)
    }
  })
});


