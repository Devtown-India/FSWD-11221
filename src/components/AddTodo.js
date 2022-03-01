import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {

    const [todo,setTodo] = useState(null)

    const dispatch = useDispatch()

    const handleAdd = ()=>{
        const action = {
            type:"ADD_TODO",
            payload: {
                id:uuidv4(),
                value:todo
            }
        }
    
        dispatch(action)
    }


    return ( 
        <div>
            <input onChange={e=>setTodo(e.target.value)} type="text" />
            <button onClick={handleAdd} >Add</button>
        </div>
     );
}
 
export default AddTodo;