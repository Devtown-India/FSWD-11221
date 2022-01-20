const button = document.querySelector('button')
const div = document.querySelector('div')
const body = document.querySelector('body')



button.addEventListener('click', (e) => {
    // check if the body has dark class
    //  yes  -> remove it
    //  no  -> add it
    body.classList.toggle('dark')
})


