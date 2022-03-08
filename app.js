
const getData = ()=> new Promise(resolve=>{
    setTimeout(()=>{
        resolve({
            brand:"Mercedes",
            model:"GTR Black series"
        })
    },2000)
})

const res = getData()

const callbackAfterPromise = (data)=>{
    console.log(data)
}

res.then(callbackAfterPromise)

// console.log(res)

// setTimeout(()=>{
//     console.log(res)

// },2000)