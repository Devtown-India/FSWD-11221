import { useSelector } from "react-redux";

const Two = () => {

    const store = useSelector(state => state)
    console.log(store)

    return (  
        <div>
            <h2>Two</h2>
        </div>
    );
}
 
export default Two;