const list = document.querySelector('ul')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data)

        data.forEach((post, iter) => {
            console.log(post.title)
            const ele = document.createElement('li')
            ele.innerHTML = `${iter + 1} : ${post.title}`
            list.appendChild(ele)
        })

    })


console.log("Hihih")



//  B -> Book

// THEN WHAT ? 

//  BOOK -> We take the book and stack it on the shelf

/*

settled
    - fullfilled
    -rejected

*/















// https://api.spacexdata.com/v4/rockets