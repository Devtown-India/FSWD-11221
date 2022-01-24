const h = document.querySelector('h2')
const b = document.querySelector('button')

b.addEventListener('click', e => {
    h.classList.toggle("hide")
})