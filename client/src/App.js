import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todos/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
    );
}
 
export default App;