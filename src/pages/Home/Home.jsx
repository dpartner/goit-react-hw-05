import { useEffect, useState } from "react";
import {fetchTrendMovies} from '../../services/api'
import MovieList from "../../components/MovieList/MovieList";
import s from './Home.module.css'
// import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setIsError(false);
        // setIsLoading(true)
        const data = await fetchTrendMovies();
      setTrends(data);
      }
      catch {
        setIsError(true)
      }
      finally {
        // setIsLoading(false)
      }
    }
    fetchData();
  },[])

  

  return (
    <main className={s.contentWrap}>
      {/* {isLoading && <Loader/>} */}
      <h1>Trending today</h1>
      {isError && <h2>Something went wrong, please try again</h2>}
      {!!trends.length && <MovieList movies={trends}/>}
    </main>
    
  )
}

export default Home
