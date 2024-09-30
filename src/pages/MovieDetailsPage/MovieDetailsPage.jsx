import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovieDetails } from "../../services/api";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import s from './MovieDetailsPage.module.css'
import { Suspense } from 'react'


const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state ?? '/movies';
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setIsError(false);
        // setIsLoading(true)
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
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

  if (!movie) {
    return;
  }
  return (
    <main>
      <div className={s.contentWrap}>
        <Link className={s.backButton} to={backLinkHref}> &lt; Go back</Link>
        {isError && <h2>Something went wrong, please try again</h2>}
        {/* {isLoading && <Loader/>} */}
        <MovieCard data={movie} />
        <p className={s.info}>Additional information:</p>
        <div className={s.infoLinkWrap}>
          <NavLink className={s.infoLink} to='cast'>Cast</NavLink>
          <NavLink className={s.infoLink} to='reviews'>Reviews</NavLink>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet/>
        </Suspense>
      </div>
    </main>
  )
}

export default MovieDetailsPage