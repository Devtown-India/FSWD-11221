import axios from "axios"
import { useState } from "react"



const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const login = async (e)=>{
        e.preventDefault()
        try {
            const { data: { token, success }} = await axios.post('http://localhost:8080/auth',{email,password})
            console.log(token)
        } catch (error) {
            console.log(error.message)
        }
    }

    return ( 
        <div>
            <h1>Login to continue</h1>
           <form onSubmit={login} >
               <label htmlFor="">Email</label>
                <input onChange={e=>setEmail(e.target.value)} type="email" />
                <br />
                <label htmlFor="">Password</label>
                <input onChange={e => setPassword(e.target.value)}  type="password" />
                <br />
                <input type="submit" value="Login" />
           </form>
        </div>
     );
}
 
export default Login;