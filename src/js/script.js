const toggle = document.querySelector("button");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    nav.ariaHidden = false;
    toggle.ariaExpanded = true;
})