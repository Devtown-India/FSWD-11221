import RecipeCard from "./RecipeCard";

const List = ({hits}) => {
    return ( 
        <div>
            {
                hits.map(({recipe:{label,image}})=><RecipeCard label={label} image={image} />)
            }
        </div>
     );
}
 
export default List;



