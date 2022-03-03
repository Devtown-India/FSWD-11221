import Profile from './components/Profile'
import Dm from './components/Dm'
import Private from './HOC/Private';

const App = () => {
  return ( 
   <div>
      <Private>
        <Profile />
        <Dm />
      </Private>
   </div>
   );
}
 
export default App;