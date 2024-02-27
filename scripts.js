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