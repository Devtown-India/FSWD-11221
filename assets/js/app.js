// const response = fetch('https://jsonplaceholder.typicode.com/posts')

// response.then(res => {
//     console.log(res)
//     const data = res.json()
//     data.then(value => { console.log(value) })
// })

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
    })


//  B -> Book

// THEN WHAT ? 

//  BOOK -> We take the book and stack it on the shelf

/*

settled 
    - fullfilled
    -rejected

*/