/* const d = document;

const route = e=>{
    e = e || window.event;
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    routesHandler();

}
const routes = {
    "/": "/portfolio_/home.html",
    "/about": "/portfolio_/about.html",
    "/contact": "#contact"
}

const routesHandler = async ()=>{
    const path = window.location.pathname;
    const route = routes[path];
    const html = await fetch(route).then((data)=> data.text());
    console.log(html)
    d.querySelector("main").innerHTML = html;


}
window.onpopstate = routesHandler;
window.route = route;
routesHandler(); */

import { langScript, translate } from "../../lang.js";

const routes = {
    home: `<div class="snap">

            <section class="home">
                <div class="bg-blur full-screen ">
                    <span class="bg-text bold font-big">Ricardo </span>
                    <span class="bg-text  bold font-big">Paniagua</span>
                </div>
                <div class="full-screen ">
                    <div class="bs bs3"></div>
                    <div class="bs bs2"></div>
                    <div class="bs bs1"></div>
                </div>
                <div class="full-screen a-center">
                    <h1 class="font-xxl antonio" data-lang="BigTitle">FULL STACK WEB DEVELOPER</h1>
                </div>

            </section>
            <section class="projects">
                <div class="bg-blur full-screen "></div>
                <h1 data-lang="selectedWork">Selected Work</h1>
                <div class="bg-blur"></div>
                <div class="gallery horizontal-scroll"></div>

            </section>
        </div>
        <section></section>
        <section></section>
        </section>
        <div class="skill-title-container">
            <h1 class="skill-title" data-lang="skillsTitle">MY SKILLS</h1>
        </div>
        <section></section>
        <section class="content">
            <div class="flex-col">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="lg-icon"
                        preserveAspectRatio="xMidYMid" viewBox="0 -1.43 255.58 290.11">
                        <path fill="#a179dc"
                            d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35" />
                        <path fill="#280068"
                            d="M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z" />
                        <path fill="#390091"
                            d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35" />
                        <g fill="#fff">
                            <path
                                d="M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z" />
                            <path
                                d="M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z" />
                        </g>
                    </svg>
                </figure>
                <p class="skill-dst" data-lang="skill1">
                    Can lead to mantainable, secure, clean and ease to debug code compared to scripting languages.
                </p>
            </div>
            <div class="flex-col">
                <p class="skill-dst" data-lang="skill2">
                    Creating alive web pages that interacts as your dream web.
                </p>
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="lg-icon"
                        viewBox="0 0 1052 1052">
                        <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                        <path
                            d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                            fill="#323330" />
                    </svg>
                </figure>
            </div>
            <div class="flex-col">
                <figure>
                    <svg viewBox="0 0 256 228" width="100" class="lg-icon" height="100"
                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <path
                            d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
                            fill="#00D8FF" />
                    </svg>
                </figure>
                <p class="skill-dst" data-lang="skill3">
                    Powerful one page Applications that stand out with versatility and focus.
            </div>
        </section>
        <section id="change">
        </section>
        <section id="about">
            <div class="bg-blur full-screen ">
                <div class="blur-blue" style="left: 36%; top: -10%;"></div>
                <div class="blur-blue" style="left: 76%;top: 51%;"></div>
            </div>
            <div>
                <h1 data-lang="know1">GET TO KNOW</h1>
                <h1 data-lang="know3">ME</h1>
                <h2 class="skill-title" data-lang="know2">ABOUT</h2>
                <p data-lang="myD">I help you bring ideas to desing, transform desingn into fully funtional webs. </p>
                <figure>
                    <img src="https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg"
                        alt="">
                </figure>
                <h5 data-lang="myD2">Entusiastic of Creating big ideas</h4>
                    <a id="navAb">
                        <div class="flex-row about-link-container">
                            <div class="kn" data-lang="knowB">
                                Know more
                            </div>
                            <div class="about-link">
                                <div>
                                    &nearr;
                                </div>
                            </div>
                        </div>
                    </a>
            </div>
        </section>`,
    about: `
        <section id="intro">
            <div class="container center">
                <div class="d crl"></div>
                <div class="d1 crl"></div>
                <div class="d2 crl"></div>
                <div class="background"></div>
                <div class="background"></div>
                <div class="background"></div>
                <div class="fit">
                    <h1 class="font-xl t1" data-lang="t1">Software Developer</h1>
                    <h1 class="font-xxl t2" data-lang="t2">Web Designer</h1>
                </div>
                <span class="bottom-right" data-lang="av">Available for work</span>
            </div>
        </section>
        <section id="description">
            <div class="moving-text"></div>
            <div class="ribbon">
                <div class="flex-row">

                    <div class="flex">
                        <h1 class="main-description" data-lang="myd">My name is Ricardo Paniagua, proud of being
                            dominican. I’m commited
                            to interativity and creativity. </h1>
                        <p data-lang="myd2">Coding is the way I for expressing my problem solving skills. Crazy about
                            art and all it’s
                            shapes</p>
                    </div>
                    <figure class="triangle">
                        <img src="/src/assets/img/ricardo.png" alt="Ricardo Paniagua">
                    </figure>
                </div>
            </div>
        </section>
        <section id="services">
            <div class="container">
                <div class="left">
                    <div class="left-c">
                        <h1 data-lang="gA">I'M GOOD AT</h1>
                        <figure>
                            <img id="servicesImg" src="/src/assets/img/services.jpg" alt="no img">
                        </figure>
                        <span class="count">.00</span>
                    </div>
                </div>
                <div class="right">
                    <div class="service" id=".01">
                        <h1 id="service-t"><span data-lang="sp1">BACK-END</span></h1>
                        <div class="service-d hidden">
                            <p class="d-none" data-lang="spd1">I have solid experience developing back-end solutions
                                using C#, Node.js, and SQL Server. My expertise also includes working with MongoDB and
                                Oracle to build scalable and efficient systems.</p>
                        </div>
                    </div>
                    <div class="service" id=".02">
                        <h1 id="service-t"><span data-lang="sp2">FONT-END</span></h1>
                        <div class="service-d hidden">
                            <p class="d-none" data-lang="spd2">I have hands-on experience with React for building
                                dynamic user interfaces. My front-end expertise includes implementing responsive designs
                                and optimizing performance for seamless user experiences.</p>
                        </div>
                    </div>
                    <div class="service" id=".03">
                        <h1 id="service-t"><span data-lang="sp3">WEB DESIGN</span></h1>
                        <div class="service-d hidden">
                            <p class="d-none" data-lang="spd3">I specialize in creating visually appealing and
                                user-friendly web designs. My skills include crafting responsive layouts and ensuring an
                                intuitive user experience across various devices.</p>
                        </div>
                    </div>
                    <span class="spacer"></span>
                </div>
            </div>
        </section>
       `

};
export let currentPage = 'home'
export function goTO(page){
    document.querySelector('main').innerHTML = routes[page]
    currentPage = page
    translate(langScript, currentPage);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    })
}