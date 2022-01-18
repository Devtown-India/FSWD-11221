const button = document.querySelector('button')

const bmw = (e) => {
    console.log(e)
    const ele = e.target
    ele.style = "background:red"
    ele.remove()
}


button.addEventListener('click', bmw)

button.addEventListener('dblclick', e => {
    e.target.style = "background:orange"
})

button.addEventListener('mouseover', e => {
    e.target.style = "background:pink"

})