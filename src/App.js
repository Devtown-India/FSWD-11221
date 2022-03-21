import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Timer from "./components/Timer";
import Profile from "./components/Profile";
import Navbar from "./layout/Navbar";
import Tap from "./components/Tap";



const App = () => {
  return ( 
      <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/tap' element={<Tap />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>
      </>
    
   );
}
 
export default App;