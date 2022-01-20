const button = document.querySelector('button')
const input = document.querySelector('input#todo_input')
const list = document.querySelector('ol')


input.addEventListener('keydown', e => {
    const key = e.key
    if (key === 'Enter') {
        // console.log("ENter key")
        handleAdd()
    }
})


const handleAdd = (e) => {

    const textToAdd = input.value

    if (textToAdd.length > 0) {
        const ele = document.createElement('li')
        const text_node = document.createTextNode(textToAdd)

        ele.appendChild(text_node)
        list.appendChild(ele)
        // create a dynamic button element
        const button = document.createElement('button')
        button.innerHTML = "Delete"
        ele.appendChild(button)

        button.addEventListener('click', (e) => {
            ele.remove()
        })


        // clear the list
        input.value = ''
    } else {
        window.alert("Task can not be empty")
    }

}

button.addEventListener('click', handleAdd)

