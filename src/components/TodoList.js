import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";

const TodoList = () => {

    const todos = useSelector(state=>state.todos)

    return ( 
        <div>
            <AddTodo/>
            <ol>
                {
                    todos.map(todo=>(
                        <li>{todo}</li>
                    ))
                }
            </ol>
        </div>
     );
}
 
export default TodoList;