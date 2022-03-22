import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
    const [chore,setChore] = useState('')
    const dispatch = useDispatch()

    const handleAdd = ()=>{
        const action = {
            type:"ADD_TODO",
            payload:chore
        }
        dispatch(action)
    }

    return ( 
        <div>
            <input type="text" onChange={e=>setChore(e.target.value)} />
            <button onClick={handleAdd} >Add</button>
        </div>
     );
}
 
export default AddTodo;