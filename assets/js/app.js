const body = document.querySelector('body')

const ele = document.createElement("div")
const textNode = document.createTextNode('This is a dynamic element')


// body.appendChild(node)

console.log(ele)
console.log(textNode)

ele.appendChild(textNode)

console.log(ele)

body.appendChild(ele)

ele.remove()