const List = ({todos}) => {

    return ( 
        <div className="todo-container">
            <ol>
                {
                    todos ? todos.map(item=>(
                        <li>{item} <button>Delete</button> <button>Mark Complete</button> </li>
                    )) : "No items to display"
                }
            </ol>
        </div>
     );
}
 
export default List;