import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AddTodo from "./AddTodo";

const Todos = () => {

    const [todos,setTodos] = useState([])
    const [token,setToken] = useState(null);

    const getTodos = async ()=>{
        try {
            const {data:{todos}} = await axios.get('http://localhost:8080/todos',{
                headers:{
                    "Auth":`bearer ${token}`
                }
            })
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
        if(localStorage.getItem('auth_token')){
            setToken(localStorage.getItem('auth_token'))
        }
        getTodos()
    },[token])


    const isAuthenticated = true

    const navigate = useNavigate()
    if(!token){
        navigate('/login')
    }

    return ( 
        <div>
           {isAuthenticated?(<>
                <h1>Todos</h1>
                <AddTodo getTodos={getTodos} />
                <ol>
                    {todos&&todos.map(todo => (
                        <li key={todo.id}>
                            {todo.text} {"    "}
                            <button onClick={() => handleDelete(todo.id)} >Delete</button>
                        </li>
                    ))}
                </ol>
           
           </>):"Login to continue"}
        </div>
     );
}
 
export default Todos;