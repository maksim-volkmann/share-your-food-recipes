import Logo from '../../componentHelpers/Logo/Logo'
import './navBar.scss'
import NavItem from '../../componentHelpers/navItem/NavItem'
import { useContext } from 'react'
import LoggedContext from '../../context/LoggedInChecker'
import LogOut from '../logOut/LogOut'
// import { Link } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

const NavBar = () => {
  const { isLoggedIn } = useContext(LoggedContext)

  return (
    <div className="navBar">
      <div className="navBarWrapper">
        <nav>
          <Logo />
          <div className="toggle">
            <a href="#">
              {/* <span class="material-symbols-outlined">menu</span> */}
              {/* <span class="material-symbols-outlined">menu_open</span> */}
            </a>
          </div>
          <ul>
            <NavItem name="Home" link="/" />
            <NavItem name="Recipes" link="/recipes" />
            {/* <NavItem name="Upload" link="#" /> */}
            {isLoggedIn === false && (
              <>
                <NavItem name="Login" link="/login" />
                <NavItem name="Register" link="/register" />
              </>
            )}

            <NavItem name="Recipe" link="/recipe:id" />
            {isLoggedIn === true && <LogOut />}

            {/* <NavItem name="Register" link="#" /> */}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
