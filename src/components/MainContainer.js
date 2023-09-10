import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitile from './VideoTitile';

const MainContainer = () => {

    const movies=useSelector(store=>store.movies?.nowPlayingMovies);

    if (movies === null) return;//early return as first in our redux store the movies will be having null

    const mainMovie=movies[0];
    console.log(mainMovie);

    const {original_title,overview,id}=mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
        
        <VideoTitile title={original_title} overview={overview}/>
        <VideoBackground movieId={id} />
        
    </div>
  )
}

export default MainContainer