import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestons = () => {

    
    const {movieResults,movieNames}=useSelector((store) => store.gpt);
    if(!movieNames) return null;

  return (

    <div className="p-2 m-4 bg-black text-white bg-opacity-80">

        <h1>{movieNames[0]}</h1>
        {movieNames.map( (movieName , index)=><MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}
        
    </div>

  )
}

export default GptMovieSuggestons