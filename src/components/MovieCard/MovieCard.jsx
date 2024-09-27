import s from './MovieCard.module.css'

const MovieCard = ({data: {title, 
  vote_average, 
  poster_path, overview, genres
  }}) => {
  return (
    <div className={s.movieCardWrap}>
        <div className={s.imgWrap}>
          <img src={`https://image.tmdb.org/t/p/w500/${
poster_path}`} alt="" />
        </div>
        <div className={s.descWrap}>
          <h2>{title}</h2>
          <p>Rating: {vote_average}</p>
          <h3>Overview</h3>
          <p className={s.overview}>{overview
          }</p>
          <h4>Genres</h4>
          <p>
            {genres.map(genre => genre.name).join('  ')}
          </p>
        </div>
      </div>
  )
}

export default MovieCard