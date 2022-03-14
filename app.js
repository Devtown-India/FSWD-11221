
const reactele = React.createElement('h1',{},"Hi from react")
const domele = document.createElement('h1')
const container = document.querySelector('div#root')

domele.innerHTML="Hi from dom"

// container.appendChild(reactele)


// console.log(reactele)
ReactDOM.render(reactele, container)