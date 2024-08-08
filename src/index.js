const i = document.querySelector(".gallery horizontal-scroll")

const time = document.querySelector(".time");
setInterval(()=>{
    time.textContent = new Date(Date.now()).toLocaleString(navigator.language, { hour: 'numeric', minute: 'numeric', hour12: true })

}, 1000)