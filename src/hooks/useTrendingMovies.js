import {useDispatch, useSelector} from "react-redux";
import {addTrendingMovies} from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"


const useTrendingMovies=()=>{

  const trendingMovies=useSelector(store => store.movies.trendingMovies)

    const dispatch=useDispatch();

    const getTrendingMovies=async()=>{   
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
    
      const json=await data.json();
    
      console.log(json.results);
    
      dispatch(addTrendingMovies(json.results))    
    }
    
    useEffect(()=>{!trendingMovies && getTrendingMovies()})

    
}

export default useTrendingMovies;