import ListItems from "./ListItems";

const List = ({todos}) => {

    return ( 
        <div className="todo-container">
            <ol>
                {
                    todos ? todos.map(item=>(
                       <ListItems item={item}/>
                    )) : "No items to display"
                }
            </ol>
        </div>
     );
}
 
export default List;