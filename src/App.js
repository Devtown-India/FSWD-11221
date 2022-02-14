import { useEffect, useState } from "react";
import TempClass from "./components/TempClass";
import TempFunc from "./components/TempFunc";


const CountKeystrokes = ()=>{
  const [strokes,setStrokes] = useState(0)


  return(
    <div>
      <h1>Electronics</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus iure pariatur accusantium neque aspernatur eos ipsa, explicabo exercitationem adipisci soluta! Rerum illum libero ipsam earum veritatis hic ut facere.
    </div>

  )
}

const Heading = () => {

  return (
    <div>
      <h1>Mobiles</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus iure pariatur accusantium neque aspernatur eos ipsa, explicabo exercitationem adipisci soluta! Rerum illum libero ipsam earum veritatis hic ut facere.
    </div>

  )
}




const App = () => {

  const [val,setVal] = useState(false)

  switch(val){
    case true:
      return( <>
        <button onClick={() => { setVal(prev => !prev) }} >  Click</button>
      <CountKeystrokes /></>)
    default:
      return (<>
        <button onClick={() => { setVal(prev => !prev) }} >  Click</button>
        <Heading />
      </>)
      
  }


}
 
export default App;