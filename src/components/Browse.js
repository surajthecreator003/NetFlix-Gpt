import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {

  const showGptSearch=useSelector( store => store.gpt.showGptSearch )

  useNowPlayingMovies();//converted the whole code to custom hook
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();


  return (
    <div>
      <Header />

      {
        showGptSearch ? (<GptSearch />) : (<> < MainContainer /> < SecondaryContainer /> </>)
      }


      {/* Backup Code
      <GptSearch />
      <MainContainer />
      <SecondaryContainer /> */}

      {
        /* Browse Page Architecture and Planning
        Main Video Container
          -Video Background
          -Video Title

        Secondary Container 
          - MovieList  (n rows)
              -Cards (n rows)
        */
      }

      </div>
  )
}

export default Browse