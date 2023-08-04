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
        let select_container = event_click_two.querySelector(".select__container");
        select_container.classList.toggle("activar");

        let arrow_icon = event_click_two.querySelector(".feauters__img img");
        arrow_icon.setAttribute("src", "images/icon-arrow-up.svg");
    })
})
/* Fin de Feauters Abrir */
/* Inicio Feauters Cerrar */
document.addEventListener("click", (event_close_feauters) => {
    let select_container = document.querySelector(".select__container.activar");
    if (select_container && !event_close_feauters.target.closest(".header__li-feauters")) {
        select_container.classList.remove("activar");

        let arrow_icon = document.querySelector(".feauters__img img");

        arrow_icon.setAttribute("src", "images/icon-arrow-down.svg");
    }
});
/* Fin de Feauters Cerrar */
/* Inicio de Company Abrir */
let container_three = document.querySelectorAll(".header__li-company");

container_three.forEach(event_click_three => {
    event_click_three.addEventListener("click", () =>{
        let company_container = event_click_three.querySelector(".company__container");
        company_container.classList.toggle("activar_company");

        let arrow_icon = event_click_three.querySelector(".company__img img");
        arrow_icon.setAttribute("src", "images/icon-arrow-up.svg");
    })
})
/* Fin de Company Cerrar */
/* Inicio de Company Cerrar */
document.addEventListener("click", (event_close_company) => {
    let company_container = document.querySelector(".company__container.activar_company");
    if (company_container && !event_close_company.target.closest(".header__li-company")) {
        company_container.classList.remove("activar_company");

        let arrow_icon = document.querySelector(".company__img img");

        arrow_icon.setAttribute("src", "images/icon-arrow-down.svg");
    }
});
/* Fin de Company Cerrar */


