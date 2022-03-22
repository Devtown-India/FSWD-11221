import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const List = () => {

    const todos = useSelector(state => state)
    const dispatch = useDispatch()
    const handleDelete = (todo)=>{
        dispatch({
            type:"DELETE_TODO",
            payload:todo
        })
    }
    return ( 
        <ul>
            {todos.map(todo=>(
               <>
                    <li>{todo}</li>
                    <button onClick={()=>handleDelete(todo)} >Remove</button>
                    </>
            ))}
        </ul>
     );
}
 
export default List;