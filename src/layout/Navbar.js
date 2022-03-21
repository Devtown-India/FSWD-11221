import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav>
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/timer">Timer</Link>
            <Link to="/tap">Tap</Link>
        </nav>
     );
}
 
export default Navbar;