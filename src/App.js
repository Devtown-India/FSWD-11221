import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Timer from "./components/Timer";
import Navbar from "./layout/Navbar";



const App = () => {
  return ( 
      <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
      </>
    
   );
}
 
export default App;