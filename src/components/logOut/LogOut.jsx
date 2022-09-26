import { useContext } from 'react'
import LoggedContext from '../../context/LoggedInChecker'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './logout.scss'

const LogOut = () => {
  const { userLoggedInInfo } = useContext(LoggedContext)
  const history = useNavigate()

  const logMeOut = async () => {
    await axios.get('http://localhost:5000/api/logout', {
      withCredentials: true,
    })
    await userLoggedInInfo()
    alert('You are logged out!')
    history('/')
  }
  return (
    <li>
      <a className="logout" onClick={logMeOut}>
        Log out
      </a>
    </li>
  )
}

export default LogOut
