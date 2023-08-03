/* Función para anexar etiquetas en el nav, para el menú hamburguesa */
function moverboton() {
    if (window.innerWidth <= 880) {
        let nav = document.querySelector(".header__nav");
        let buttons = document.querySelector(".header__buttons");
        nav.appendChild(buttons);
    } else {
        let header_left = document.querySelector(".header__left");
        let buttons = document.querySelector(".header__buttons");
        header_left.parentNode.insertBefore(buttons, header_left.nextSibling);
    }
}
moverboton();
window.addEventListener("resize", moverboton);
/* Fin Función para anexar etiquetas en el nav */

/* Abrir y cerrar menu hamburguesa */
let nav = document.querySelector("#nav");
let abrir = document.querySelector("#abrir");
let cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>  {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
/* Fin abrir y cerrar menu hamburguesa */
/* Inicio de Feauters Abrir */
let container_two = document.querySelectorAll(".header__li-feauters");

container_two.forEach(event_click_two => {
    event_click_two.addEventListener("click", () =>{
        event_click_two.nextElementSibling.classList.toggle("activar");
    })
})








