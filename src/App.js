import {Routes,Route,useNavigate} from 'react-router-dom'
import About from './components/About';
import Article from './components/Article';
import Contact from './components/Contact';
import Home from './components/Home';
import Profile from './components/Profile';
import Private from './HOC/PrivateRoute';

const App = () => {

    const navigate = useNavigate()

    return ( 
        <div>
            <button onClick={() => {
                navigate('/contact')
            }} >contact</button>
            <button onClick={() => {
                navigate('/about')
            }} >about</button>
            <button onClick={() => {
                navigate('/profile')
            }} >profile</button>
            <button onClick={() => {
                navigate('/article/something')
            }} >article</button>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/profile' element={<Private><Profile/></Private>} />
                    <Route path='/article/:name' element={<Article />} />
                </Routes>
          
        </div>
     );
}
 
export default App;