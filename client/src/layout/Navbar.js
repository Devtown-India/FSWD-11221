import { useEffect, useState } from "react";
import { useNavigate } from "react-router";



const Navbar = () => {

    const [token,setToken] = useState(null)
    useEffect(()=>{
        if (localStorage.getItem('auth_token')) {
            setToken(localStorage.getItem('auth_token'))
        }
    })

    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem('auth_token')
        navigate('/login')
    }

    return ( 
        <div>
            <ul>
                {token ? <button onClick={handleLogout} >Logout</button> : <li>Login</li>}
             
                
            </ul>
        </div>
     );
}
 
export default Navbar;