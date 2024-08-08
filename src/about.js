

document.addEventListener("click", e=>{
    if(e.target.matches("#service-t")){
        
        const parent = e.target.parentElement
        const span = parent.querySelector("span")
        const d = parent.querySelector(".service-d");
        const count = document.querySelector(".count");

        count.textContent  = count.textContent == parent.id? ".00" : parent.id

        for(elm of document.querySelectorAll(".service-tB")){
            if(elm == span) continue;
            elm.classList.remove("service-tB")
        }
        for(elm of document.querySelectorAll(".service-d")){
            if(elm == d) continue;
            console.log("A")
            d.firstChild.classList.add("d-none");
            elm.classList.add("hidden");
        }
        console.log(d)
        d.firstChild.classList.toggle("d-none");
        d.classList.toggle("hidden")
        span.classList.toggle("service-tB");
    }
})

const aj =async ()=>{
    const div = document.createElement("div");
    div.innerHTML = await fetch("/index.html").then((data)=> data.text());
    document.body.insertAdjacentElement("afterbegin",div.querySelector("header"));
    document.body.insertAdjacentElement("beforeend",div.querySelector("#contact"));
    document.body.insertAdjacentElement("beforeend",div.querySelector("footer"));

}
aj()