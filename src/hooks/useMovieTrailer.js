import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';


const  useMovieTrailer=()=>{


    //solving the trailer variable problem with redux store
    const dispatch=useDispatch();

    //subscribing to redux store for trailer variable
    


    const getMovieVideos=async (movieId)=>{

        const data=await fetch(movieId, API_OPTIONS)
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

}

export default useMovieTrailer;


    