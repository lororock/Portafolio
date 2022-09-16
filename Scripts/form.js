
const $form = document.getElementById('form');

const url_api = 'https://x8ki-letl-twmt.n7.xano.io/api:yAUzDDSM/form_ibarreradev'

$form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const $cta = document.getElementById("cta")
    const $nosend = document.querySelector(".btn-nosend")
    const $send = document.querySelector(".btn-send")

    $nosend.classList.add("hide")
    $send.classList.add("show")

    setTimeout(()=>{
        $nosend.classList.remove("hide")
        $send.classList.remove("show")
    }, 3000)

    const newData = {
    name,
    email,
    }

    const init = {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(newData)
    }

    const response = await fetch(url_api, init);
    if (response.ok) {
        const respuesta = await response.json();
        $cta.classList.remove("showCta")
        e.target.name.value = ""
        e.target.email.value = ""
    }
});

