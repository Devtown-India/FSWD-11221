import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Profile from './components/Profile';

const App = () => {
    return ( 
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/profile' element={<Profile/>} />
            </Routes>
         
        </div>
     );
}
 
export default App;