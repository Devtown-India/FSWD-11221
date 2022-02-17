import { useState } from "react";
import List from "./List";

const app_key = '90e85fa3a05eeacb0754f1e8617f2f75'
const application_id = '9ef90b43'

const Recipe = () => {

    const [query,setQuery] = useState('')
    const [hits,setHits] = useState([])

    const handleSearch = async ()=>{
        const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${application_id}&app_key=${app_key}`

        const res = await fetch(endpoint)
        const {hits} = await res.json()
        setHits(hits)
    }

    return ( 
        <div className="recipe-container" >
            <h1>Recipe application</h1>

            <div className="form">
                <input onChange={e=>setQuery(e.target.value)}  type="text" />
                <button onClick={handleSearch} >Search</button>
            </div>

            <List hits={hits} />
        </div>
     );
}
 
export default Recipe;