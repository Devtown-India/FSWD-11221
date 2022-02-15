import { useState } from "react"

const A = ()=>{
  return(
    <div>
      <h1>A</h1>
    </div>
  )
}
const B = ()=>{
  return(
    <div>
      <h1>B</h1>
    </div>
  )
}


const App = () => {
  const [value,setvalue] = useState(false)


  return ( 
    <div>
      {value?<A/>:<B/>}
      <button onClick={()=>setvalue(prev=>!prev)}  >Toggle</button>
    </div>
   );
}
 
export default App;