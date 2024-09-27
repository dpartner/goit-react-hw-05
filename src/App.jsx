import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from './pages/Home/Home'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import './App.css'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
          <Route path='/movies/:movieId/cast' element={<MovieCast />}/>
          <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
