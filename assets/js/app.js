
const response = fetch('https://jsonplaceholder.typicode.com/photos')

console.log(response)

setTimeout(() => {
    console.log(response)
}, 150)