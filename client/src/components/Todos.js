import axios from "axios";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";

const Todos = () => {


    const [todos,setTodos] = useState([])

    const getTodos = async ()=>{
        try {
            const {data:{todos}} = await axios.get('http://localhost:8080/todos')
            setTodos(todos)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleDelete = async id=>{
        try {
            const { data } = await axios.delete(`http://localhost:8080/todos/${id}`)
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getTodos()
    },[])

    return ( 
        <div>
            <h1>Todos</h1>
            <AddTodo getTodos={getTodos}/>
            <ol>
                {todos.map(todo=>(
                    <li key={todo.id}>
                        {todo.text} {"    "}
                        <button onClick={() => handleDelete(todo.id)} >Delete</button>
                    </li>
                ))}
            </ol>
        </div>
     );
}
 
export default Todos;