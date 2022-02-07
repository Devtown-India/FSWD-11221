import { useState } from 'react'
import Counter from './components/Counter'

const App = () => {

  const [state, setState] = useState([])

  const handleAdd = (item) => {
    setState(prev => {
      const newArr = prev
      newArr.push(item)
      return newArr
    })
  }


  return (
    <div style={{ height: "500px", display: "flex", alignItems: "center", flexDirection: "column" }} >
      <div>
        {state.map(todo => {

        })}
      </div>

    </div>
  );
}

// React.createElement

export default App;