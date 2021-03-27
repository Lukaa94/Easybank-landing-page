const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".navbar-hamburger");
const closeBtn = document.querySelector(".navbar-close");


hamburger.addEventListener("click", () =>{
    navbar.classList.remove("hide");
    overlay.classList.remove("hide");
    closeBtn.classList.remove("hide");
    hamburger.classList.add("hide");
});

closeBtn.addEventListener("click", () =>{
    navbar.classList.add("hide");
    overlay.classList.add("hide");
    closeBtn.classList.add("hide");
    hamburger.classList.remove("hide");
});
