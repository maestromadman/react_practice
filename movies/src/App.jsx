import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

import MovieCard from './MovieCard';

// 7416d6ca
const API_URL = 'http://www.omdbapi.com?apikey=7416d6ca'

const movie1 = {
        "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
        "Year": "2016",
        "imdbID": "tt18689424",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
    
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }
    
    useEffect(() => {
        searchMovies('Superman');
    }, []); 

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div> 
            
            <div className="container">
               <MovieCard movie1={movie1} />
            
            </div>
        </div>
    );

}

export default App;

