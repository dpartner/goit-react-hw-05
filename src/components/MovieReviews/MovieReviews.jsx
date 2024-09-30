import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "../../services/api";
import { useState, useEffect } from "react";
// import Loader from "../../components/Loader/Loader";
import s from './MovieReviews.module.css'

const MovieReviews = () => {
  const {movieId} = useParams();
  const [reviews, setReviews] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setIsError(false);
        // setIsLoading(true)
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      }
      catch {
        setIsError(true)
      }
      finally {
        // setIsLoading(false)
      }
    }
    fetchData();
  },[movieId])

  if (!reviews) {
    return;
  }
  return (
    <>
      {/* {isLoading && <Loader/>} */}
      {isError && <p>Something went wrong, please try again</p>}
      {reviews.length ? <ul>
        {reviews.map(review => {
          return (
            <li className={s.reviewItem} key={review.id}>
              <h3 className={s.reviewHeading}>Author: {review.author}</h3>
              <p className={s.review}>{review.content}</p>
            </li>
          )})
          
        }
        </ul> : <p>No any reviews found</p>
      }
    </>
  )
}

export default MovieReviews