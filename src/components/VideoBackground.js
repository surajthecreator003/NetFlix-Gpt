import React from 'react';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';


const VideoBackground = ({movieId}) => {
    //fetch trailer by making api call using movie id
    


    //solving the trailer variable problem with redux store
    const dispatch=useDispatch();

    //subscribing to redux store for trailer variable
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo)


    const getMovieVideos=async ()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/615656/videos?language=en-US', API_OPTIONS)
        const json=await data.json();
        console.log(json);

        const filterData = json.results.filter(video => video.type === "Trailer");

        //suppose there is no trailer then we need to handle error so the below code 👇
        const trailer=filterData.length ? filterData[0]:json.result[0] ;
        console.log(trailer);
        //then we use trailer.key

        dispatch(addTrailerVideo(trailer));

    }

    useEffect(()=>{
        getMovieVideos();
    },[])

  return (
    <div>
        <iframe  
        src={"https://www.youtube.com/embed/dG91B3hHyY4?si=u6mqE4LU7AX1serC" + trailerVideo?.key }
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
  )
}

export default VideoBackground