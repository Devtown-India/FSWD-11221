import { useLocation, useParams } from "react-router";


const Article = () => {

    const {name} = useParams()

    return ( 
        <div>
            <h1>Article on {name} </h1>
        </div>
     );
}
 
export default Article;