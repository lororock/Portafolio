
const options_prin = {
    delay: 0,
    duration: 500,
    reset: true,
    scale: 0,
    viewOffset: {
        top: 10,
        right: 0,
        bottom: 10,
        left: 0,
    }
}

function cb (el) {
    el.classList.add("shake")
    setTimeout(() => {
       el.classList.remove("shake") 
    },3000)
    
}

ScrollReveal().reveal('.reveal', options_prin)

ScrollReveal().reveal('.shakeit', {
    afterReveal: cb,
})
