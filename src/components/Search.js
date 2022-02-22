import { useState } from "react";
import { getCoordsFromCity } from "../api/getCoordsFromCity";
import { getForecast } from "../api/getForecast";


const Search = () => {

    const [query,setQuery] = useState('')

    const handleSearch = async ()=>{
        console.log(query)
        const res = await getCoordsFromCity({name:query})
        console.log(res)
        // const results = res.results
        // const city = res.results[0];
        const {results:[city]} = res
        console.log(city)
        const {geometry:{lat,lng}} = city
        console.log({latitude:lat,longitude:lng})
        const weather = await getForecast({ latitude: lat, longitude: lng })
        console.log(weather)
    }

    return (
        <div>
            <input onChange={(e)=>setQuery(e.target.value)} type="text" />
            <button onClick={handleSearch} >Search</button>
        </div>
      );
}
 
export default Search;