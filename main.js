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
let container_feauters = document.querySelector(".select__container");
let open_container = document.querySelector(".select__feauters");
let close_container = document.querySelector(".header__li-company");

open_container.addEventListener("click", () => {
    container_feauters.classList.add("visible");
})
close_container.addEventListener("click", () => {
    container_feauters.classList.remove("visible");
})


