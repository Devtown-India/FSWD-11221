import { useState } from "react";

import '../styles/Search.css'


const Search = ({setCity}) => {

    return (
        <div className="Search">
            <label className="Search__label">
                <input
                    className="Search__input"
                  
                />
            </label>
            <button className="Search__button" >
                Search
            </button>
        </div>
      );
}
 
export default Search;