import axios from 'axios'
import toast from 'react-hot-toast'

const api_key = 'bd1e6f3339a444e6501ebb5ebb18be53'


export const getForecast = async ({ longitude, latitude }) => {

   try {
       const res = await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
           params: {
               lat: latitude,
               lon: longitude,
               appid: api_key,
               exclude: "minutely,hourly,alerts",
               units: "metric"
           }
       })
       toast.success("Fetched weather")
       return res.data
   } catch (error) {
       console.log(error)
       toast.error(error.message)
       return null
   }

}

