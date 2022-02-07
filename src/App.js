import { useState } from 'react'
import Counter from './components/Counter'

const App = () => {

  const [state, setState] = useState(0)

  const handleIncrease = (e) => {
    setState((previousStateValue) => previousStateValue + 1)
    console.log(state)
  }
  const handleDecrease = (e) => {

    setState((previousStateValue) => previousStateValue === 0 ? previousStateValue : previousStateValue - 1)
    console.log(state)
  }

  return (
    <div style={{ height: "500px", display: "flex", alignItems: "center", flexDirection: "column" }} >
      <Counter count={state} />
      <div>
        <button onClick={handleDecrease} >Decrease</button>
        <button onClick={handleIncrease} >Increase</button>
      </div>

    </div>
  );
}

// React.createElement

export default App;