import { useState } from "react";

const TodoInput = ({ setTodos }) => {

    const [chore,setChore] = useState('')

    const handleAdd = ()=>{
        setTodos(prev=>[...prev,chore])
    }

    const handleChange = (e)=>{
        setChore(e.target.value)
    }


    return (
        <div className="todo-input">
            <input onChange={handleChange} type="text" />
            <button onClick={handleAdd} >Add</button>
        </div>
    );
}

export default TodoInput;