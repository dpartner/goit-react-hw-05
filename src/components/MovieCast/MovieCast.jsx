import { useParams } from "react-router-dom"
import { fetchMovieCast } from "../../services/api";
import { useState, useEffect } from "react";
// import Loader from "../../components/Loader/Loader";
import s from './MovieCast.module.css'

const MovieCast = () => {
  const {movieId} = useParams();
  const [cast, setCast] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const defaultImg = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setIsError(false);
        // setIsLoading(true)
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
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

  if (!cast) {
    return;
  }
  return (
    <>
      {isError && <h2>Something went wrong, please try again</h2>}
      {/* {isLoading && <Loader/>} */}
      {<ul className={s.castWrap}>
        {cast.map((actor, index) => {
          if (index > 9) {
            return;
          }
          return (
            <li className={s.castItem} key={actor.id}>
              <div className={s.imgWrap}>
                <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w300/${
actor.profile_path}` : defaultImg} alt={actor.name} className={s.img} />
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