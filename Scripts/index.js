
// Asignations
// Menu Icon
const $navIcon = document.querySelector(".navbar__icon");
// Menu
const $hambMenu = document.querySelector(".navbar__menu");
// Menu links
const $navLink = document.querySelectorAll(".navbar__menu-item-link");
// contact button
const $contact = document.getElementById("contact");
// close cta button
const $closeCta = document.getElementById("closeCta");
// cta section
const $cta = document.getElementById("cta");
// copyright date
const $date = document.getElementById("date");
// slider
const grande = document.querySelector('.grande')
// point slider
const punto = document.querySelectorAll('.punto')
// Typeits
// subtitulo de la tarjeta del header
const titleTypeIt = 
    new TypeIt("#title", {loop: true, speed: 150})
        .type('Desarrollador Web', {delay: 500})
        .delete()
        .type('Autodidacta', {delay: 500})
        .delete()
        .type('Disciplina', {delay: 500})
        .delete()
        .type('Dedicación', {delay: 500})
        
titleTypeIt.go()

// logo
setTimeout(() => {
    const logoTypeIt1 = 
        new TypeIt("#logo", {speed: 50})
            .type('Ventas')

    const logoTypeIt2 =
        new TypeIt("#logo2", {speed: 50})
            .type('ev')

logoTypeIt1.go()
setTimeout(() => {
    logoTypeIt2.go()
    logoTypeIt1.destroy()
}, 1500)

setTimeout(() => {
    logoTypeIt2.destroy()
}, 10000)

},1000)


// Open/close menu when tap icon
$navIcon.addEventListener("click", () => {
    $navIcon.classList.toggle("active-nav");
    $hambMenu.classList.toggle("menu-visible");
});

// Open/close menu when tap a link
$navLink.forEach((item) => {
    item.addEventListener("click", () => {
        $navIcon.classList.remove("active-nav");
        $hambMenu.classList.remove("menu-visible");
    });
});

// Show cta section
$contact.addEventListener("click", () => {
    $cta.classList.add("showCta")
});

$closeCta.addEventListener("click", () => {
    $cta.classList.remove("showCta")
});

// date in copyright 
const year = new Date().getFullYear()
$date.innerHTML = year

punto.forEach( (cadaPunto, i ) => {
    punto[i].addEventListener('click',() =>{
        let posicion = i
        let operacion = posicion * -33
        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach((cadaPunto , i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})