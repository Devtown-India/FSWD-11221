import { useEffect, useState } from "react"

const A = ()=>{

  const [time,settime] = useState(0)

  

  console.log('rerender')


  return(
    <div>
      <h1>{time}</h1>

    </div>
  )
}

const B = ()=>{

  useEffect(() => {
    return () => console.log("Component B unmounted")
  },[])

  return(
    <div>
      <h1>B</h1>
    </div>
  )
}

const App = () => {
  useEffect(() => {
    localStorage.setItem('login Time', Date())

  }, [])

  return ( 
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio molestias, ducimus iste dolorem eaque atque cumque aliquid accusamus nemo id nihil aut sit ipsum ad deserunt dolorum, rerum iure porro.
    </div>
   );
}
 
export default App;