import ListItems from "./ListItems";

const List = ({ todos, setTodos}) => {

    return ( 
        <div className="todo-container">
            <ol>
                {
                    todos ? todos.map(item=>(
                        <ListItems setTodos={setTodos} item={item}/>
                    )) : "No items to display"
                }
            </ol>
        </div>
     );
}
 
export default List;