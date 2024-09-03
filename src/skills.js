import { reveal } from "./assets/helpers/animation.js";
import { langScript } from "./lang.js";

const change = document.querySelector("#change");
const title = document.querySelector(".skill-title");
const cr = change.getBoundingClientRect();

/* const obvSection = new IntersectionObserver(
  (entries, obv)=>{
    entries.forEach(entry=>{
      if(entry.intersectionRatio == 1){
        disableScroll();

      }
    })
  }
)
 */

let about = false;
document.addEventListener("wheel", (e) => {
  if (
    parseInt(visualViewport.height - change.getBoundingClientRect().bottom) >
      -100 &&
    e.deltaY > 0 &&
    !about
  ) {
    about = true;
    disableScroll();

    setTimeout(function () {
      enableScroll();
    }, 800);

    reveal(title, langScript.home.about.text, 700);
  }
  if (
    parseInt(visualViewport.height - change.getBoundingClientRect().bottom) <
      -100 &&
    e.deltaY < 0 &&
    about
  ) {
    about = false;
    disableScroll();

    setTimeout(function () {
      enableScroll();
    }, 800);
    reveal(title, langScript.home.skillsTitle.text, 800);
  }
});

function disableScroll() {
  document.body.style.overflow = "hidden";
}

// Habilitar el desplazamiento
function enableScroll() {
  document.body.style.overflow = "";
}
// Evento que deshabilita el desplazamiento por 30 segundos

export async function addProjects() {
  // Play the video when is visible and stop it when not visible
  const gallery = document.querySelector(".projects .gallery");
  const projects = langScript.home.selectedWork.projects;
  const obvVideo = new IntersectionObserver(
    (entries, obv) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.8) {
          entry.target.click();
          entry.target.querySelector("video").loop = true;
          entry.target.querySelector("video").play();
        } else {
          entry.target.querySelector("video").loop = false;
          entry.target.querySelector("video").pause();
        }
      });
    },
    { threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
  );
  gallery.innerHTML = "";

  projects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project");
    projectContainer.innerHTML += `
      
        <div class="bg-df">
            <figure>
                <video src="${project.imgsrc}" alt="" autoplay loop></video
            </figure>
        </div>
        <div class='project-d'>
            <span class="pj-title">${project.title}</span>
            <p>${project.description}</p>
            <div class="flex-row tech-container " style="flex-wrap: wrap">
            </div>
            <div style="height: 50px; width: 100%; ">

            </div>
            <div style="height: 50px; width: 100%; bottom: 2rem; position: absolute; right: 0; display: flex; justify-content: end; gap: 1rem; margin-top: 2rem; padding-right: 2rem">
                        <a href="${
                          project.git
                        }" target="_black" style="text-decoration: none;">
              <div class="flex-row about-link-container" style="position: relative;">
                <div class="kn" style="-webkit-text-fill-color: var(--highlightPrimary);">
                    Github
                </div>
                <div class="about-link">
                    <div>
                        &nearr;
                    </div>
                </div>
              </div>
            </a>
            ${
              project.link !== ""
                ? `<a href="${project.link}" target="_black"  style="text-decoration: none;" >
              <div class="flex-row about-link-container" style="position: relative; ">
                <div class="kn" style="-webkit-text-fill-color: var(--highlightPrimary);">
                  ${langScript.home.selectedWork.project.text}
                </div>
                <div class="about-link">
                    <div>
                        &nearr;
                    </div>
                </div>
              </div>
            </a>`
                : ""
            }
            </div>
        </div>
      
      `;
    project.technologies.forEach((tech) => {
      projectContainer.querySelector(
        ".tech-container"
      ).innerHTML += `<div><span class="devider"></span>
        <span class="tegnologies">${tech}</span></div>
        `;
      gallery.appendChild(projectContainer);
    });
    obvVideo.observe(projectContainer);
  });
}
