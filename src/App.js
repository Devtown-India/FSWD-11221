import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getCityFromCoords } from "./api/getCityFromCoords";
import { getForecast } from "./api/getForecast";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import Loader from "./layout/Loader";
import CurrentWeather from './components/CurrentWeather'
import './styles/App.css'


const App = () => {

  const [city,setCity] = useState('city')
  const [loader,setLoader] = useState(false)
  const [location,setLocation] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState(null)
  console.log(city)


  const handleSearch = ()=>{
    // make the request to opencage to get coords of the query
    // make the req to weather api to get the weather
    // setWeatherForecast(forecast)
  }

  useEffect(()=>{
    handleSearch()
  },[city])


  useEffect(()=>{

    const locationSuccess = async ({coords:{latitude,longitude}})=>{
      setLoader(true)
      const address = await getCityFromCoords({latitude,longitude})
      setLocation(address.results[0].components)

      const forecast = await getForecast({ longitude, latitude })
      setLoader(false)
      setWeatherForecast(forecast)
      console.log(forecast)
    }


    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(locationSuccess)
    }else{
      alert("You browser doesn't support geolocation")
    }
    
  },[])

  console.log(weatherForecast?.daily)


  return ( 
    <div className="App">
      <div className="App_container">
        <Search/>
        {loader&&<Loader/>}
        {weatherForecast && <CurrentWeather weatherInfo={weatherForecast} location={location}/>}


        {weatherForecast &&
         weatherForecast.daily.map(d=>(
           <Forecast location={location} weatherInfo={d} />
         ))
        }
      
      </div>
    </div>
   );
}
 
export default App;