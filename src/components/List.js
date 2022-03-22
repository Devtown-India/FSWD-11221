import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const List = () => {

    const store = useSelector(state => state)

    const [todos, settodos] = useState(store)

    return ( 
        <ul>
            {todos.map(todo=>(
                <li>{todo}</li>
            ))}
        </ul>
     );
}
 
export default List;