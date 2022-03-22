import AddTodo from "./components/AddTodo";
import List from "./components/List";

const App = () => {
  return ( 
    <div style={{margin:"50px"}} >
      <AddTodo/>
      <List/>
    </div>
   );
}
 
export default App;