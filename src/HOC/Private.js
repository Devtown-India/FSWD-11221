const Private = (props) => {
    return localStorage.getItem('token') ? props.children : (<h2>LOGIN BEFORE ACCESSING</h2>)
}

export default Private;