import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies=useSelector(store => store.movies);


  return (

    movies.nowPlayingMovies && 

    <div className=" bg-black">

      <div className="-mt-52 relative z-20 pl-12">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />

      <MovieList title={"Popular"} movies={movies.popularVideo} />

      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />

      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
      </div>

      
      {
        /*
        Movie List -popular
        Movie List -Now Playing
        Movie List -Trending Now
        Movie List -Romantic
        Movie List -Documentaries
        Movie List -Now Playing

 
      */ }
    </div>
  )
}

export default SecondaryContainer