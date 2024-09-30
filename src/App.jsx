import {Routes, Route} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.css'
import Header from "./components/Navigation/Navigation"
import Loader from './components/Loader/Loader';
// import Home from './pages/Home/Home'
// import MoviesPage from './pages/MoviesPage/MoviesPage'
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
// import MovieCast from './components/MovieCast/MovieCast'
// import MovieReviews from './components/MovieReviews/MovieReviews'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {


  return (
    <>
      <Header/>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
            <Route path='/movies/:movieId/cast' element={<MovieCast />}/>
            <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
