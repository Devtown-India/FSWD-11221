const Login = () => {
    return ( 
        <div>
            <h1>Login to continue</h1>
           <div>
               <label htmlFor="">Email</label>
                <input type="email" />
                <br />
                <label htmlFor="">Password</label>
                <input type="password" />
           </div>
            <button>Login</button>
        </div>
     );
}
 
export default Login;