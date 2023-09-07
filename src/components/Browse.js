import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

useNowPlayingMovies();//converted the whole code to custom hook
usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

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