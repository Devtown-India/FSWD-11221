import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
    const [counter,setCounter] = useState(0)

    useEffect(() => {
        console.log('mounted')
    }, [])

    useEffect(() => {
        console.log('counter state updated')
        window.alert(`Hey counter is ${counter}`)
    }, [counter])

    return (
        <div>
            <h1>Counter - {counter} </h1>
            <button onClick={()=>setCounter(prev=>prev+1)} >  Inc</button>

        </div>
    );
}

export default Counter;