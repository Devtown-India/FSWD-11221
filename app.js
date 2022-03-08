
const container = document.querySelector("div.container")


const getData = async ()=>{
    const stream = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await stream.json()

    console.log(data)
    data.map(element=>{
        const ele = document.createElement("h4")
        ele.innerHTML= element.title
        console.log(ele)
        container.appendChild(ele)
    })
}


getData()



