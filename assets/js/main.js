const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

//In this place I put the function of button.//

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav--visible");
});
