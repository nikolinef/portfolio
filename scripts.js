const burgerMenu = document.getElementById("burgermenu");
const header = document.querySelector("header");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    header.classList.toggle("active");
})


document.querySelectorAll(".menua").forEach(n => n.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
        header.classList.remove("active");
    }))