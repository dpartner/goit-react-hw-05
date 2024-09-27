import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from './pages/Home/Home'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import './App.css'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
