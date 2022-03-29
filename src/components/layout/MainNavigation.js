import { Link } from "react-router-dom"

import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            React Meetups
        </div>
        <nav>
            <ul>
                <li>
                    <Link className={classes.link} to="/">Home</Link>
                </li>
                <li>
                    <Link className={classes.link} to="/new-meetup">New Meetup</Link>
                </li>
                <li>
                    <Link className={classes.link} to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation