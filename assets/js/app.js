
// let value = 9

// const myFirstPromise = new Promise((resolve, reject) => {
//     if (value > 10) resolve([{ id: 1, data: "this is data" }])
//     else reject({ error: "error fetching data" })
// })

// myFirstPromise
//     .then(response => response[0])
//     .then(data => {
//         console.log(data)
//     }).catch(err => { console.log(err) })

/*
Make an API call to A
-> then use the data from A to make another api call to B
-> then use the data from B to make another api call to C
-> then use the data from B to make another api call to C
-> then use the data from B to make another api call to C
-> then use the data from B to make another api call to C
-> then use the data from B to make another api call to C

*/


// const getData = ()=>{

// }



// fetch('https://google.com')
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(response => response.data)
//     .then(data => {
//         console.log(data)
//     }).catch(err => {
//         console.log(err)
//     })

const getData = async () => {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
    finally {
        console.log("Ill execute no matter what")
    }

}

getData()

console.log(3)
