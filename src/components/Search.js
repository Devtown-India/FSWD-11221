import { useState } from "react";
import toast from "react-hot-toast";
import { getCoordsFromCity } from "../api/getCoordsFromCity";
import { getForecast } from "../api/getForecast";


const Search = ({setCity}) => {

    const [query,setQuery] = useState('')

    const handleSearch = async ()=>{
        setCity(query)
    }

    return (
        <div>
            <input onChange={(e)=>setQuery(e.target.value)} type="text" />
            <button onClick={handleSearch} >Search</button>
        </div>
      );
}
 
export default Search;