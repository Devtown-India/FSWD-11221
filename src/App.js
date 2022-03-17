import './styles/Header.css'


import Header from './components/Header'
import List from './components/List'
import TodoInput from './components/TodoInput'

const App = () => {

  const todos = ['Item 1', "Item 2", "Item 3", "Item 4"]

  return (
    <div>
      <Header/>
      <TodoInput/>
      <List todos={todos} />

    </div>
  );
}


export default App;
























