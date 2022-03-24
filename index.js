const axios = require('axios')

// axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
//     console.log(res.data)
// })

const fetchData = async ()=>{
   const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
   console.log(res.data)
}

fetchData()