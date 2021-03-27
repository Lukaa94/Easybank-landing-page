const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger-icon");
const xIcon = document.querySelector(".x-icon");


hamburger.addEventListener("click", () =>{
    navbar.classList.remove("hide");
    overlay.classList.remove("hide");
    xIcon.classList.remove("hide");
    hamburger.classList.add("hide");
});

xIcon.addEventListener("click", () =>{
    navbar.classList.add("hide");
    overlay.classList.add("hide");
    xIcon.classList.add("hide");
    hamburger.classList.remove("hide");
});
