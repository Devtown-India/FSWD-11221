
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


// const data = 

// const [c2, c1] = ["SHeldon", "Stuart", "Leonard"]

// console.log(c1)

// console.log(data.name)
// console.log(data['name'])


// const getData = async () => {

//     try {

//         const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const data = await response.json()

//         data.forEach(ele => {
//             // console.log(ele)
//             const { userId, title } = ele

//             console.log(`${userId} ${title}`)
//         })

//     } catch (error) {
//         console.log(error)
//     }
//     finally {
//         console.log("Ill execute no matter what")
//     }

// }

// getData()

// console.log(3)

// let a = {
//     brand: "mercedes"
// }

// let b = a
// let c = {...a }

// c.brand = "Porsche"

// // console.log(a)
// // console.log(b)
// console.log(c)
// console.log(a)

const a = {
    brand: "mercedes"
}

const b = {
    brand: "Porsche"
}

const c = {
    ...a,
    ...b
}


// const c ={
//     brand: "mercedes",
//     model: "S500 Maybach"
// }


console.log(c)