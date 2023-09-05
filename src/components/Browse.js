import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";


const Browse = () => {

useNowPlayingMovies();//converted the whole code to custom hook

  return (
    <div>
      <Header />
      </div>
  )
}

export default Browse