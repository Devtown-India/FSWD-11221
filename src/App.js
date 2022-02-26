import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getCityFromCoords } from "./api/getCityFromCoords";
import { getCoordsFromCity } from "./api/getCoordsFromCity";
import { getForecast } from "./api/getForecast";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import Loader from "./layout/Loader";
import CurrentWeather from './components/CurrentWeather'
import './styles/App.css'


const App = () => {

  const [city,setCity] = useState(null)
  const [loader,setLoader] = useState(false)
  const [location,setLocation] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState(null)

  // const handleSearch = ()=>{
  //   // make the request to opencage to get coords of the query
  //   // make the req to weather api to get the weather
  //   // setWeatherForecast(forecast)
  // }



  useEffect(()=>{

    const locationSuccess = async ({coords:{latitude,longitude}})=>{
      setLoader(true)
      const address = await getCityFromCoords({latitude,longitude})
      setLocation(address.results[0].components)

      const forecast = await getForecast({ longitude, latitude })
      setLoader(false)
      setWeatherForecast(forecast)
    }


    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(locationSuccess)
    }else{
      alert("You browser doesn't support geolocation")
    }
    
  },[])

  const handleSearch = async()=>{
    const { results: [result]} = await getCoordsFromCity({ name: city })
    const {geometry:{lat,lng}} = result
    console.log({longitude:lng,latitude:lat}) 
    setLoader(true)
    const address = await getCityFromCoords({ longitude: lng, latitude: lat })
    setLocation(address.results[0].components)

    const forecast = await getForecast({ longitude: lng, latitude: lat })
    setLoader(false)
    setWeatherForecast(forecast)
  }

  useEffect(() => {
    if(city){
    console.log('city changed')
    handleSearch()
    }
  }, [city])


  // const handleSearch = async ()=>{
  //   // const address = await getCityFromCoords({ latitude, longitude })
  //   // setLocation(address.results[0].components)
  //   console.log(cityData)
  //   // const forecast = await getForecast({ longitude, latitude })
  // }


  return ( 
    <div className="App">
      <div className="App_container">
        <Search setCity={setCity} />
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