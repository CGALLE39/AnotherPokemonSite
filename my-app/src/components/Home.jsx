import React from 'react'
import {Search} from "./Search";

export const Home = () => {

    const getPokemon = (query) => {
    // const response = await fetchPokemon(query);
}

    return (
        <div className="Home">
        <div>
            <h5>
                HOME
            </h5>
        </div>
        <div className="search-container">
        <Search getPokemon={getPokemon}/>
        </div>
        </div>
    )
}
