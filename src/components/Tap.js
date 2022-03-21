import { useEffect } from "react";
import { useState } from "react";

const Tap = () => {
    const [taps,setTaps] = useState(0)


    useEffect(()=>{
        const action = () => {
            console.log('Key presses')
            setTaps(prev => prev + 1)
        }
        window.addEventListener('keydown',action)
        return ()=>{
            console.log('unmounting')
            window.removeEventListener('keydown',action)
        }
    },[])


    return ( 
        <div>
            <h1>Tap- {taps}</h1>
        </div>
     );
}
 
export default Tap;