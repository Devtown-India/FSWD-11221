import { useState } from "react";

import '../styles/Search.css'


const Search = ({setCity}) => {

    const [query,setQuery] = useState(null)

    
    return (
        <div className="Search">
            <label className="Search__label">
                <input
                onChange={e=>setQuery(e.target.value)}
                    className="Search__input"
                  
                />
            </label>
            <button
            onClick={()=>setCity(query)}
             className="Search__button" >
                Search
            </button>
        </div>
      );
}
 
export default Search;