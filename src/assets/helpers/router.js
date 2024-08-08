const d = document;

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
routesHandler();