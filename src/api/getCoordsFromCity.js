import axios from 'axios'
import toast from 'react-hot-toast'
const api_key = 'a93c6faecf6c4d349444611a397f5311'

export const getCoordsFromCity = async ({name})=>{

   try {
       const res = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
           params: {
               lang: 'en',
               q: name,
               key: api_key
           }
       })
       return res.data
   } catch (error) {
       toast.error(error.message)
       console.log(error)
       return null
   }

}