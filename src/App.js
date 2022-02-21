import { useEffect } from "react";
import axios from 'axios'

const App = () => {

  // useEffect(() => {
  //   const getLocation = async ({coords})=>{
  //     const {latitude,longitude} = coords
  //     console.log(latitude,longitude)
  //     const response = await axios.get(
  //       "https://api.opencagedata.com/geocode/v1/json? ",
  //       {
  //         params: {
  //           key: "acbc16299d964fa88cd77ecd66829e6f",
  //           q: `${latitude}+${longitude}`,
  //           language: "en"
  //         }
  //       }
  //     );
  //       console.log(response)
  //   }

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(getLocation, getLocation);
  //     console.log()
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  useEffect(()=>{

    const api_key = 'bd1e6f3339a444e6501ebb5ebb18be53'

    const getWeatherFromCoords = async ({longitude,latitude})=>{

      const res = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params:{
          lat:latitude,
          lon:longitude,
          appid:api_key
        }
      })


      console.log(res.data)

      // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`)
      // const data = await res.json()
      // console.log(data)

    }

    const locationSuccess = ({coords:{latitude,longitude}})=>{
      getWeatherFromCoords({ longitude, latitude })
    }

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(locationSuccess)
    }else{
      alert("You browser doesn't support geolocation")
    }
    
  },[])

  return ( 
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fugiat voluptate eos. Delectus, nobis dolores odio quo incidunt, dignissimos ex aut, harum laborum culpa tempora maxime. In beatae exercitationem soluta?
    </div>
   );
}
 
export default App;