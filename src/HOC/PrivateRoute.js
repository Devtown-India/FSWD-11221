import {Navigate} from 'react-router-dom'

const Private = (props) => {
    return localStorage.getItem('token')?props.children:<Navigate to="/" />
}
 
export default Private;