import s from './MovieCard.module.css'

const MovieCard = ({data: {title, 
  vote_average, 
  poster_path, overview, genres
  }}) => {
  return (
    <div className={s.movieCardWrap}>
        <div className={s.imgWrap}>
          <img className={s.image} src={`https://image.tmdb.org/t/p/w500/${
poster_path}`} alt="" />
        </div>
        <div className={s.descWrap}>
          <h2 className={s.heading}>{title}</h2>
          <p className={s.rating}>Rating: {vote_average}</p>
          <h3 className={s.overviewHeading}>Overview</h3>
          <p className={s.overviewDesc}>{overview
          }</p>
          <h4 className={s.genresHeading}>Genres</h4>
          <p>
            {genres.map(genre => genre.name).join(' ')}
          </p>
        </div>
      </div>
  )
}

export default MovieCard