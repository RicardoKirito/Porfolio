import { findParent, servicesAction, servicetEv } from "./about.js";
import { goTO } from "./assets/helpers/router.js";
import { addProjects } from "./skills.js";

document.addEventListener("DOMContentLoaded", () => {

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
        tosumit.value = "The email was sent ✓";
        tosumit.style.backgroundColor = "lightseagreen";
        setTimeout(() => {
          tosumit.value = "SEND EMAIL";
          tosumit.style.backgroundColor = "";
        }, 3000);
      } else {
        tosumit.value = "The email was not send X";
        tosumit.style.backgroundColor = "salmon";
        setTimeout(() => {
          tosumit.value = "SEND EMAIL";
          tosumit.style.backgroundColor = "";
        }, 3000);
      }
    });
  });
  addProjects()
  document.addEventListener("click", async e=>{
    
    if(e.target.matches("#navI")){
      goTO('home');
      
    }
    if(e.target.matches("#navA") || findParent(e.target, 'navAb', 'id')){
      goTO('about')
      servicesAction()
    }
  })
});


