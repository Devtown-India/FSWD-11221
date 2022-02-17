const List = ({recipies}) => {
    return ( 
        <div>
            {
                recipies.map(recipe=>(
                    <div>
                        <h2>{recipe.name}</h2>
                    </div>
                ))
            }
        </div>
     );
}
 
export default List;