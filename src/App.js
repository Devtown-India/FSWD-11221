import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { getForecast } from "./api/getForecast";
import Search from "./components/Search";
const App = () => {


  useEffect(()=>{

    const locationSuccess = async ({coords:{latitude,longitude}})=>{
      const forecast = await getForecast({ longitude, latitude })
      console.log(forecast)
    }

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(locationSuccess)
    }else{
      alert("You browser doesn't support geolocation")
    }
    
  },[])

  return ( 
    <div>
      <div><Toaster /></div>
      <Search/>
    </div>
   );
}
 
export default App;