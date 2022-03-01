import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";

const TodoList = () => {

    const todos = useSelector(state=>state.todos)

    const handleDelete = (id)=>{
        console.log(id)
    }

    return ( 
        <div>
            <AddTodo/>
            <ol>
                {
                    todos.map(todo=>(
                        <>
                            <li>{todo.value}</li>
                            <button onClick={()=>handleDelete(todo.id)} >Delete</button>
                        </>
                    ))
                }
            </ol>
        </div>
     );
}
 
export default TodoList;