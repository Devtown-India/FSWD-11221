const RecipeCard = ({label,image}) => {
    return ( 
        <div>
            <img src={image} alt="" />
            <h2>{label}</h2>
        </div>
     );
}
 
export default RecipeCard;