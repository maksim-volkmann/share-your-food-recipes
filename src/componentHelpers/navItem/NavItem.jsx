import './navItem.scss'
import { Link } from 'react-router-dom'

const NavItem = ({ name, link }) => {
  return (
    <>
      <li className="navItem">
        <Link to={link}>{name}</Link>
      </li>
    </>
  )
}

export default NavItem
