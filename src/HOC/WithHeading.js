import Heading from "../components/Heading";

const WithHeading = (props) => {
    console.log(props)
    return ( 
        <div>
            <Heading/>
            {props.children}
        </div>
     );
}
 
export default WithHeading;