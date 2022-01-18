// let elements = document.getElementsByClassName('temp')
// let elements = document.getElementsByTagName('div')
let elements = document.querySelectorAll('div.temp')

let arr = [1, 2, 3, 4, 5]

console.log(elements)
console.log(arr)


// for (let i = 0; i < elements.length; i++) {
//     elements[i].innerHTML = `Element ${i}`
// }

elements.forEach((ele, i) => {
    ele.innerHTML = `Element ${i} ${i % 2 == 0 ? 'even' : "odd"}`
});