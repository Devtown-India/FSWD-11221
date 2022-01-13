/*

// JSON

// literal notation to create an object
const car = {
    age: 4,
    brand: "Mercedes",
    getBrand: () => { console.log(this.brand) }
}

// console.log(temp.age)
// console.log(temp['brand'])

car.getBrand()



*/
/*


console.log(window.innerWidth)
console.log(window.innerHeight)


// window.alert("This is an alert")

// window.prompt("What is your password")

console.log(typeof console)
console.warn(`I'm console.log`)
console.error(`I'm console.log`)

*/

// let arr = [1, 2, 3, 4, 5, "hi", "JOhn", "daffy", "sheldon"]
let arr = ["Go to the GYM", "Eat breakfast", "Study fo the exam"]

// const callback = (e, i) => {
//     console.log(e, i)
// }

const body = document.querySelector('body')


arr.forEach((e, i) => {
    const ele = document.createElement('div')
    const text = document.createTextNode(e)
    ele.append(text)
    console.log(ele)

    body.appendChild(ele)


})

