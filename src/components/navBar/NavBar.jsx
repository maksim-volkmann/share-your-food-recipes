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
          <ul>
            <NavItem name="Home" link="/" />
            {/* <NavItem name="Recipes" link="/recipes" /> */}

            <NavItem name="Contact" link="/contact" />

            {isLoggedIn === false && (
              <>
                <NavItem name="Login" link="/login" />
                <NavItem name="Register" link="/register" />
              </>
            )}

            {isLoggedIn === true && (
              <>
                {/* <NavItem name="Recipe" link="/recipe:id" /> */}
                <NavItem name="New Recipe" link="/newrecipe" />
                <LogOut />
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
