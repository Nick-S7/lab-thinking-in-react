import React from 'react'

export default function SearchBar({ handleSearch }) {

   
    return (
        <div>
            Search<br />
            <input type="text" onChange={handleSearch}></input><br />
        </div>
    )
} 
