import { useContext } from 'react'
import LoggedContext from '../../context/LoggedInChecker'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
  const { userLoggedInInfo } = useContext(LoggedContext)
  const history = useNavigate()

  const logMeOut = async () => {
    await axios.get('http://localhost:5000/api/logout', {
      withCredentials: true,
    })
    await userLoggedInInfo()
    history('/')
  }
  return <button onClick={logMeOut}>LOG OUT</button>
}

export default LogOut
