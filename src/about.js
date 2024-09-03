export const servicetEv = (e) => {
  const parent = findParent(e.target, "service", "class");
  const span = parent.querySelector("span");
  const d = parent.querySelector(".service-d");
  const count = document.querySelector(".count");
  const img = document.querySelector("#services img");

  count.textContent = count.textContent == parent.id ? ".00" : parent.id;

  switch (count.textContent) {
    case ".00":
      img.src = "./src/assets/img/services.jpg";
      break;
    case ".01":
      img.src = "./src/assets/img/backend.jpeg";
      break;
    case ".02":
      img.src = "./src/assets/img/frontend.jpeg";
      break;
    case ".03":
      img.src = "./src/assets/img/webdesign.jpg";
      break;
  }

  for (var elm of document.querySelectorAll(".service-tB")) {
    if (elm == span) continue;
    elm.classList.remove("service-tB");
  }
  for (var elm of document.querySelectorAll(".service-d")) {
    if (elm == d) continue;
    d.firstElementChild.classList.add("d-none");
    elm.classList.add("hidden");
  }
  d.firstElementChild.classList.toggle("d-none");

  d.classList.toggle("hidden");
  span.classList.toggle("service-tB");
};
export function servicesAction() {
  const services = document.querySelectorAll(".service");
  services.forEach((service) => {
    service.addEventListener("click", (e) => servicetEv(e));
  });
}

export function findParent(target, name, identifier) {
  if (target === document.body) return null;
  if (identifier === "class") {
    if (target.className !== name)
      return findParent(target.parentElement, name, identifier);
  } else {
    if (target.id !== name)
      return findParent(target.parentElement, name, identifier);
  }
  return target;
}
