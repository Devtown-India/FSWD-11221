

import Header from './components/Header'
import List from './components/List'
import TodoInput from './components/TodoInput'

const App = () => {

  const todos = ['Item 1', "Item 2", "Item 3", "Item 4"]

  const doSomething = ()=>{
    console.log("Did something")
  }


  return (
    <div>
      <Header/>
      <TodoInput/>
      <List  doSomething={doSomething} />

    </div>
  );
}


export default App;
























