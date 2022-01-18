// let elements = document.getElementsByClassName('temp')
let elements = document.getElementsByClassName('div')

let arr = [1, 2, 3, 4, 5]

console.log(elements)
console.log(arr)


// for (let i = 0; i < elements.length; i++) {
//     elements[i].innerHTML = `Element ${i}`

// }

elements.forEach((ele, i) => {
    ele.innerHTML = `Element ${i}`
});