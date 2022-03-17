import './styles/Header.css'


import Header from './components/Header'
import List from './components/List'
import TodoInput from './components/TodoInput'
import { useState } from 'react'

const App = () => {

  const [todos,setTodos] = useState([])

  return (
    <div>
      <Header/>
      <TodoInput setTodos={setTodos} />
      <List setTodos={setTodos} todos={todos} />

    </div>
  );
}

export default App;