import { useSelector,useDispatch} from "react-redux";
import AddTodo from "./AddTodo";

const TodoList = () => {

    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        console.log(id)
        const action = {
            type:"DELETE_TODO",
            payload:id
        }
        dispatch(action)
    }

    return ( 
        <div>
            <AddTodo/>
            <ol>
                {
                    todos.map(todo=>(
                        <>
                            <li key={todo.id} >{todo.value}</li>
                            <button onClick={()=>handleDelete(todo.id)} >Delete</button>
                        </>
                    ))
                }
            </ol>
        </div>
     );
}
 
export default TodoList;