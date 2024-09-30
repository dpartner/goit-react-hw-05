import { useEffect, useState } from "react";
import {fetchSearchMovie} from '../../services/api'
import MovieList from "../../components/MovieList/MovieList";
// import Loader from "../../components/Loader/Loader";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // const [query, setQuery] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    if (!query) {
      return;
    }
    const fetchData = async () => {
      try {
        setIsError(false);
        // setIsLoading(true)
        const data = await fetchSearchMovie(query);
        setMovieList(data);
      }
      catch {
        setIsError(true)
      }
      finally {
        // setIsLoading(false)
      }
    }
    fetchData();
  },[query])

  function handleSearch (searchValue) {
    // setQuery(searchValue);
    const nextParams = searchValue !== "" ? {query: searchValue} : {};
    setSearchParams(nextParams);
  }

  return (
    <main>
      <SearchForm onSearch={handleSearch} />
      {/* {isLoading && <Loader/>} */}
      {isError && <h2>Something went wrong, please try again</h2>}
      {!!movieList.length && <MovieList movies={movieList}/>}
    </main>
    
  )
}

export default MoviesPage