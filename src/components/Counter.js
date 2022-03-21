import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
    const [show,setShow] = useState(false)
    const [type,setType] = useState('text')

  
    useEffect(() => {
        setType(prev=>{
            if(prev==='text') return 'password'
            return 'text'
        })
    }, [show])

    return (
        <div>
            <input type={type} />
            <button onClick={()=>setShow(prev=>!prev)} >◎</button>
        </div>
    );
}

export default Counter;