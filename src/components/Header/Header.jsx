import { NavLink } from "react-router-dom"
import s from "./Header.module.css";
import clsx from 'clsx'


const Header = () => {

  function buildLinkClass ({isActive}) {
    return clsx(s.link, isActive && s.activeLink)
  }
  return (
    <nav>
      <NavLink className={buildLinkClass} to='/'>
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to='/movies'>
        Movies
      </NavLink>
    </nav>
  )
}

export default Header