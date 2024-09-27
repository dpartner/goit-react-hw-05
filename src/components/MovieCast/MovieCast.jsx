import { useParams } from "react-router-dom"
import { fetchMovieCast } from "../../services/api";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

const MovieCast = () => {
  const {movieId} = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true)
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
        console.log(data.cast)
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

  if (!cast) {
    return;
  }
  return (
    <>
      {isError && <h2>Something went wrong, please try again</h2>}
      {isLoading && <Loader/>}
      {<ul>
        {cast.map((actor, index) => {
          if (index > 9) {
            return;
          }
          return (
            <li key={actor.id}>
              <div>
                <img src={`https://image.tmdb.org/t/p/w300/${
actor.profile_path}`} alt={actor.name} />
              </div>
              <div>
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          )
        })}
        </ul>
      }
    </>
  )
}

export default MovieCast