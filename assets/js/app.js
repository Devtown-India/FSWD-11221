const ele1 = React.createElement('h1', {}, React.createElement('h2', {}, 'JSX'))


console.log(ele1)

ReactDOM.render(
    ele1,
    document.getElementById('root'))




// const ele2 = document.createElement('h1')
// ele2.innerHTML = "hi"
// console.log(ele2)
// ele.innerText = "I was created using react"
// document.getElementById('root').appendChild(ele1)

// let count = 0

// // button on click  increase the value 

// const plus = document.getElementById('plus')
// const minus = document.getElementById('minus')
// const counter = document.getElementById('counter')
// const ele = document.getElementById("ele")

// plus.addEventListener('click', (e) => {
//     count++
//     counter.innerHTML = count
//     ele.style = `height:${count}px`
// })