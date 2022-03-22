import { useState } from "react";

const AddTodo = () => {
    const [chore,setChore] = useState('')

    const handleAdd = ()=>{
        console.log(chore)
    }

    return ( 
        <div>
            <input type="text" onChange={e=>setChore(e.target.value)} />
            <button onClick={handleAdd} >Add</button>
        </div>
     );
}
 
export default AddTodo;