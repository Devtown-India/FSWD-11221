
// const getData = ()=> new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve({
//             brand:"Mercedes",
//             model:"GTR Black series"
//         })
//     },2000)
// })

// const res = getData()


// res
// .then((data) => ({...data,engine:"V8 bitrubo"}))
// .then(modifiedValue=>{
//     console.log(modifiedValue)
// })



const response = fetch('https://jsonplaceholder.typicode.com/todos')

// response.then(stream=>{
//     console.log(stream)
//     const dataPromise = stream.json()
//     console.log(dataPromise)
//     dataPromise.then(actualData=>{
//         console.log(actualData)
//     })
// })

response
.then(stream => stream.json())
.then(data=>{
    console.log(data)
})