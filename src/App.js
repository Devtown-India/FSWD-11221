import { useState } from "react"

const App = () => {

  const [state,setState] = useState(10)

  console.log(state)

  const handleClick = () => {
    setState((prev)=>prev+1)
  }

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={handleClick} >+</button>
    </div>
  );
}

export default App;