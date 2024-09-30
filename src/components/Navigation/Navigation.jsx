import { NavLink } from "react-router-dom"
import s from "./Navigation.module.css";
import clsx from 'clsx'


const Navigation = () => {

  function buildLinkClass ({isActive}) {
    return clsx(s.link, isActive && s.activeLink)
  }
  return (
    <header className={s.header}>
      <nav className={s.navWrap}>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to='/movies'>
          Movies
        </NavLink>
      </nav>
    </header>
    
  )
}

export default Navigation