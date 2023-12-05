import React from 'react'
import {Search} from "./Search";

export const Home = () => {
    return (
        <div className="Home">
        <div>
            <h5>
                HOME
            </h5>
        </div>
        <div className="search-container">
        <Search />
        </div>
        </div>
    )
}
