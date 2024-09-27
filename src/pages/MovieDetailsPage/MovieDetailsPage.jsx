import { Link, useParams } from "react-router-dom"
import { fetchMovieDetails } from "../../services/api";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true)
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
        console.log(data)
      }
      catch {
        setIsError(true)
      }
      finally {
        setIsLoading(false)
      }
    }
    fetchData();
  },[movieId])

  return (
    <>
      {isLoading && <Loader/>}
      {isError && <h2>Something went wrong, please try again</h2>}
      <Link to='/'> Go back</Link>
      <MovieCard data={movie} />
    </>
  )
}

export default MovieDetailsPage