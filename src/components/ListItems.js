const ListItems = ({ item, setTodos}) => {


    const handleDelete = ()=>{
        setTodos(prev=>prev.filter(chore=>chore!==item))
    }

    // const {item} = props
    return ( 
        <li>{item}<button onClick={handleDelete} >Delete</button> <button>Mark Complete</button> </li>
     );
}
 
export default ListItems;