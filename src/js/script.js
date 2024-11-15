const toggle = document.querySelector("button");
const nav = document.querySelector("nav");
const body = document.querySelector("body")



toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    body.classList.add("noscroll");
})
