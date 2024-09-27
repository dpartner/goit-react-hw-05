import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "../../services/api";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

const MovieReviews = () => {
  const {movieId} = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true)
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
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

  if (!reviews) {
    return;
  }
  return (
    <>
      {isError && <h2>Something went wrong, please try again</h2>}
      {isLoading && <Loader/>}
      
    </>
  )
}

export default MovieReviews