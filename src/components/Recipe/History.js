const History = () => {
    const history = JSON.parse(localStorage.getItem('history'))
    return history.map(item=><div>{item}</div>)
}
 
export default History;