const ListItems = ({item}) => {
    // const {item} = props
    return ( 
        <li>{item}<button>Delete</button> <button>Mark Complete</button> </li>
     );
}
 
export default ListItems;