import { useState } from "react";
import One from "./components/One";

const App = () => {

  const [count,setCount] = useState(15)


  return ( 
    <div>
      <h1>State management</h1>
      <One count={count} />
    </div>
   );
}
 
export default App;