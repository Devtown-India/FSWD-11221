import { useState } from "react";

const TempFunc = (props) => {
    // console.log(props.temp)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return ( 
        <div>
            <h1>Function component</h1>
        </div>
     );
}
 
export default TempFunc;