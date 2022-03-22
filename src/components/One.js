import Two from "./Two";

const One = ({count}) => {
    return ( 
       <>
            <h1>One</h1>
            <Two count={count} />
       </>
     );
}
 
export default One;