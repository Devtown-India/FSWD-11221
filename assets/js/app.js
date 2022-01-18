const body = document.querySelector('body')

const tasks = ['Go to the GYM', 'Take Medicine', "Eat", "SLeep"]

const ol = document.createElement('ol')

tasks.forEach(task => {
    const li = document.createElement("li")
    const textNode = document.createTextNode(task)
    li.appendChild(textNode)
    ol.appendChild(li)
})

console.log(ol)


body.appendChild(ol)