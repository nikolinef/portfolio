const burgerMenu = document.getElementById("burgermenu"); 
const header = document.querySelector("header"); /*kan fange class elementer*/

burgerMenu.addEventListener("click", () => { /*funktion udløst af click */
    burgerMenu.classList.toggle("active"); /*tilføjer en ny class på burgermenuen*/
    header.classList.toggle("active"); /*tilføjer en ny class på headeren*/
})


document.querySelectorAll(".menua").forEach(n => n.addEventListener("click", () => { 
    /*Jeg har lavet en ny class, menu a, som js kan hente og lave den samme funktion for hvert link udløst af en eventlistener*/
    burgerMenu.classList.remove("active"); 
        header.classList.remove("active");
    }))
    /*funktionen fjerne active class, så  hver gang man trykker på et af linksne vil menuen lukke igen, 
    fordi jeg har skrevet i css at headeren og burgermenu ikke skal vises, når .active class ikke er "aktivt"*/

//scripts til carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carouselcard");
    let dots = document.getElementsByClassName("dot");
    
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("activeSlide", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " activeSlide";
}