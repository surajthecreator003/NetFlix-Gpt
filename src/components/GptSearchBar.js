import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    
    const dispatch=useDispatch();

    const handleGPTSearchClick = async () => {
      console.log(searchText.current.value);

      const query="Act as a Movie Recommendation System and suggest some Movies for the Query :" + searchText.current.value + ". only give me names of 5 Movies, comma spareted like the example result given ahead.Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya"

      //make an api call to openAI and get movie result
      const gptResults=await openai.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });

     if(!gptResults.choices){
        //  Error handelling
      }

      console.log(gptResults?.choices?.[0]?.message?.content)

      const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
      console.log(gptMovies)

      //for each movie now we will search in tmdb api
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));//will return an array of promise object
      console.log( promiseArray);
 
      const tmdbResults = await Promise.all(promiseArray)//this will resolve all promises in the array and give all promise object resolved values
      console.log(tmdbResults); 

      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
    }

    const searchText=useRef(null);

    const  langKey=useSelector(store => store.config.lang)

  //this will search movies in tmdb database
    const searchMovieTMDB = async (movie) =>{

        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS)

        const json=await data.json();

        return json.results;

    }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">

        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>

           <input ref={searchText} type="text" className=" p-4 m-4 col-span-9" placeholder = {lang[langKey].gptSearchPlaceHolder}/>

           <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGPTSearchClick}>{lang[langKey].search}</button>

        </form>

    </div>
  )

}

export default GptSearchBar