import axios from "axios";
import { useState } from "react";

const AddTodo = ({ getTodos }) => {


    const [item,setItem] = useState('')

    const handleChange = (e)=>{
        setItem(e.target.value)
    }

    const handleSubmit = async()=>{
        try {
            const { data } = await axios.post('http://localhost:8080/todos', {
                text: item
            })
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div style={{marginLeft:"20px"}} >
            <input onChange={handleChange} type="text" />
            {'    '}
            <button onClick={handleSubmit} >Add</button>
        </div>
     );
}
 
export default AddTodo;