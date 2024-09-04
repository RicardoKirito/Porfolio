import { findParent } from "./about.js";
import { currentPage } from "./assets/helpers/router.js";
import { addProjects } from "./skills.js";

const en = {
  home: {
    BigTitle: {
      text: "FULL STACK WEB DEVELOPER",
    },
    selectedWork: {
      text: "Selected Work",
      project: { text: "Try it" },
      projects: [
        {
          title: "BankGuard",
          technologies: [
            "ASP.NET",
            "C#",
            "EntityFramework",
            "SQL Server",
            "Bootstrap",
            "JavaScript",
          ],
          imgsrc: "./src/assets/video/BankGuard.mp4",
          description:
            "This bank app allows users to make payments to their bank cards, get cash advances, know their total debt amount, transfer money, and much more.",
          git: "https://github.com/RicardoKirito/BankGuard",
          link: "",
        },
        {
          title: "Friends app",
          technologies: [
            "ASP.NET",
            "C#",
            "EntityFramework",
            "Bootstrap",
            "SQL Server",
            "JavaScript",
          ],
          imgsrc: "./src/assets/video/Friends.mp4",
          description:
            "This social media app allows you to share experiences with your friends by posting images or text, commenting on your friend's posts, and adding well-known friends.",
          git: "https://github.com/RicardoKirito/Friends",
          link: "",
        },
        {
          title: "Nicochat",
          technologies: [
            "React",
            "Node.js",
            "WebSocket",
            "Bootstrap",
            "MongoDB",
            "JavaScript",
          ],
          imgsrc: "./src/assets/video/nicochat.mp4",
          description:
            "This real-time chat app allows you to connect with your friends. You can send, edit, and delete messages, upload images, add and delete chats, customize your theme, and more. Give it a try!",
          git: "https://github.com/RicardoKirito/Nicochat.git",
          link: "https://nicochat.onrender.com",
        },
      ],
    },
    skillsTitle: { text: "MY SKILLS" },
    skill1: {
      text: "Can lead to maintainable, secure, clean, and easy to debug code compared to scripting languages.",
    },
    skill2: {
      text: "Creating alive web pages that interact as your dream web.",
    },
    skill3: {
      text: "Powerful one-page applications that stand out with versatility and focus.",
    },
    know1: { text: "GET TO KNOW" },
    know2: { text: "ABOUT" },
    know3: { text: "ME" },
    about: { text: "ABOUT" },
    myD: {
      text: "I help you bring ideas to design, transform design into fully functional webs.",
    },
    myD2: { text: "Enthusiastic about Creating big ideas" },
    knowB: { text: "Know more" },
    q1: { text: "YOU LIKED MY WORK?" },
    q2: { text: "LET'S" },
    q3: { text: "CONNECT" },
    find: { text: "FIND ME ON" },
  },
  placeholder: {
    name: { text: "PROVIDE ME YOUR NAME" },
    email: { text: "WHAT'S YOUR EMAIL?" },
    descript: { text: "TELL ME, HOW CAN I HELP?" },
    send: { text: "SEND EMAIL" },
    send1: {
      text: "The email was sent ✓",
    },
    send2: {
      text: "The email was not send X",
    },
  },
  about: {
    t1: { text: "Software Developer" },
    t2: { text: "Web Designer" },
    av: { text: "Available for work" },
    myd: {
      text: "My name is Ricardo Paniagua, proud of being Dominican. I’m committed to interactivity and creativity.",
    },
    myd2: {
      text: "Coding is the way I express my problem-solving skills. Crazy about art and all its shapes.",
    },
    cv: {text: "My CV", link: "/src/assets/document/ricardopaniaguaen.pdf"},
    gA: { text: "I'M GOOD AT" },
    sp1: { text: "BACK-END" },
    spd1: {
      text: "I have solid experience developing back-end solutions using C#, Node.js, and SQL Server. My expertise also includes working with MongoDB and Oracle to build scalable and efficient systems.",
    },
    sp2: { text: "FRONT-END" },
    spd2: {
      text: "I have hands-on experience with React for building dynamic user interfaces. My front-end expertise includes implementing responsive designs and optimizing performance for seamless user experiences.",
    },
    sp3: { text: "WEB DESIGN" },
    spd3: {
      text: "I specialize in creating visually appealing and user-friendly web designs. My skills include crafting responsive layouts and ensuring an intuitive user experience across various devices.",
    },
    q1: { text: "YOU LIKED MY WORK?" },
    q2: { text: "LET'S" },
    q3: { text: "CONNECT" },
    find: { text: "FIND ME ON" },
  },
};
const es = {
  home: {
    BigTitle: {
      text: "DESARROLLADOR WEB FULL STACK",
    },
    selectedWork: {
      text: "Projectos",
      project: { text: "Probarlo" },
      projects: [
        {
          title: "BankGuard",
          technologies: [
            "ASP.NET",
            "C#",
            "EntityFramework",
            "SQL Server",
            "Bootstrap",
            "JavaScript",
          ],
          imgsrc: "./src/assets/video/BankGuard.mp4",
          description:
            "Esta aplicación bancaria permite a los usuarios realizar pagos a sus tarjetas bancarias, obtener adelantos en efectivo, conocer el monto total de su deuda, transferir dinero y mucho más.",
          git: "https://github.com/RicardoKirito/BankGuard",
          link: "",
        },
        {
          title: "Friends app",
          technologies: [
            "ASP.NET",
            "C#",
            "EntityFramework",
            "Bootstrap",
            "SQL Server",
            "JavaScript",
          ],
          imgsrc: "./src/assets/video/Friends.mp4",
          description:
            "Esta aplicación de redes sociales te permite compartir experiencias con tus amigos publicando imágenes o textos, comentando las publicaciones de tus amigos y añadiendo a tus amigos conocidos.",
          git: "https://github.com/RicardoKirito/Friends",
          link: "",
        },
        {
          title: "Nicochat",
          technologies: [
            "React",
            "Node.js",
            "WebSocket",
            "Bootstrap",
            "MongoDB",
            "JavaScript",
          ],
          imgsrc: "./src/assets/video/nicochat.mp4",
          description:
            "Esta aplicación de chat en tiempo real te permite conectarte con tus amigos. Puedes enviar, editar y eliminar mensajes, subir imágenes, añadir y eliminar chats, personalizar tu tema, y más. ¡Pruébalo!",
          git: "https://github.com/RicardoKirito/Nicochat.git",
          link: "https://nicochat.onrender.com",
        },
      ],
    },

    skillsTitle: {
      text: "HABILIDADES",
    },
    skill1: {
      text: "Puedo llevar a un código mantenible, seguro, limpio y fácil de depurar en comparación con los lenguajes de scripting.",
    },
    skill2: {
      text: "Creando páginas web vivas que interactúan como tu web soñada.",
    },
    skill3: {
      text: "Aplicaciones de una sola página potentes que se destacan por su versatilidad y enfoque.",
    },
    know1: {
      text: "CONOCE UN POCO",
    },
    know2: { text: "MÁS DE" },
    know3: {
      text: "MI",
    },
    about: {
      text: "SOBRE MI",
    },
    myD: {
      text: "Te ayudo a llevar ideas al diseño, transformar diseños en webs completamente funcionales.",
    },
    myD2: {
      text: "Entusiasta de la creación de grandes ideas",
    },
    knowB: {
      text: "Saber más",
    },
    q1: {
      text: "¿TE GUSTÓ MI TRABAJO?",
    },
    q2: {
      text: "GENIAL!",
    },
    q3: {
      text: "CONTACTAME",
    },
    find: {
      text: "ESTOY EN",
    },
  },
  placeholder: {
    name: {
      text: "PROPORCIÓNAME TU NOMBRE",
    },
    email: {
      text: "¿CUÁL ES TU CORREO ELECTRÓNICO?",
    },
    descript: {
      text: "CUÉNTAME, ¿CÓMO PUEDO AYUDARTE?",
    },
    send: {
      text: "ENVIAR CORREO",
    },
    send1: {
      text: "Mensaje enviado ✓",
    },
    send2: {
      text: "Mensaje no enviado X",
    },
  },
  about: {
    t1: {
      text: "Desarrollador de Software",
    },
    t2: {
      text: "Diseñador Web",
    },
    av: {
      text: "Abierto a ofertas",
    },
    myd: {
      text: "Mi nombre es Ricardo Paniagua, orgulloso de ser dominicano. Estoy comprometido con la interactividad y la creatividad.",
    },
    myd2: {
      text: "Codificar es la manera en la que expreso mis habilidades para resolver problemas. Apasionado por el arte en todas sus formas.",
    },
    cv: {text: "Mi CV", link: "/src/assets/document/ricardopaniaguaes.pdf"},
    gA: {
      text: "SOY BUENO EN",
    },
    sp1: {
      text: "BACK-END",
    },
    spd1: {
      text: "Tengo experiencia sólida desarrollando soluciones de back-end utilizando C#, Node.js y SQL Server. Mi experiencia también incluye trabajar con MongoDB y Oracle para construir sistemas escalables y eficientes.",
    },
    sp2: {
      text: "FRONT-END",
    },
    spd2: {
      text: "Tengo experiencia práctica con React para construir interfaces de usuario dinámicas. Mi experiencia en front-end incluye la implementación de diseños responsivos y la optimización del rendimiento para una experiencia de usuario fluida.",
    },
    sp3: {
      text: "DISEÑO WEB",
    },
    spd3: {
      text: "Me especializo en crear diseños web visualmente atractivos y fáciles de usar. Mis habilidades incluyen la creación de diseños responsivos y garantizar una experiencia de usuario intuitiva en diversos dispositivos.",
    },
    q1: {
      text: "¿TE GUSTÓ MI TRABAJO?",
    },
    q2: {
      text: "GENIAL!",
    },
    q3: {
      text: "CONTACTAME",
    },
    find: {
      text: "ESTOY EN",
    },
  },
};
let lan = "en";
const langs = {
  en: en,
  es: es,
};

export function translate(lan, page) {
  for (var elm of Object.keys(lan[page])) {
    const element = document.querySelector(`[data-lang ='${elm}']`);
    try {
      if (elm === "cv") {
        element.href = lan.about[elm].link;
      }
        element.textContent = lan[page][elm].text;

    } catch (err) {
      console.log(err, element, elm)
    }
  }
  if (page === "home") {
    addProjects();
  }
  for (var elm of Object.keys(lan.placeholder)) {
    const element = document.querySelector(`[data-lang ='${elm}']`);
    if (element) {
      if (elm === "send") {
        element.value = lan.placeholder[elm].text;
      }
      else {
        document.querySelector(`[data-lang ='${elm}']`).placeholder =
          lan.placeholder[elm].text;
      }
    }
  }
}
export let langScript = langs[lan] || en;
document.querySelector("#lang").addEventListener("click", (e) => {
  const span = findParent(e.target, "lang", "class").querySelector("p");
  switch (lan) {
    case "en":
      lan = "es";
      span.textContent = "English";
      langScript = es;
      translate(es, currentPage);
      break;
    case "es":
      lan = "en";
      span.textContent = "Español";
      langScript = en;
      translate(en, currentPage);
      break;
  }
});

translate(langScript, currentPage);
