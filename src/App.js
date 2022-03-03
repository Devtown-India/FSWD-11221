import Blog from "./components/Blog";
import Heading from "./components/Heading";
import WithHeading from "./HOC/WithHeading";
import Temp from './components/Temp'

const App = () => {
  return ( <div>
    <WithHeading>
      <Blog/>
      <Temp/>
    </WithHeading>
  </div> );
}
 
export default App;