import { Link, useLocation } from "react-router-dom"
import s from './MovieList.module.css'

const MovieList = ({movies}) => {
  const location = useLocation();
  return (
    <ul className={s.movieList}>
      {movies.map(movie => { 
        return <li className={s.movieItem} key={movie.id}>
        <Link to={`/movies/${movie.id}`} state={location} >{movie.title}</Link>
      </li>})
      }
    </ul>
  )
}

export default MovieList