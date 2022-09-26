import './loginForm.scss'
import { useContext } from 'react'
import axios from 'axios'
import { useState } from 'react'
import LoggedContext from '../../context/LoggedInChecker'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })
  const { userLoggedInInfo } = useContext(LoggedContext)
  const history = useNavigate()

  const onChangeHandler = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onClickHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:5000/api/login',
        loginInfo,
        { withCredentials: true },
      )
      await userLoggedInInfo()
      alert('Successfully logged in!')
      history('/')
      return response
    } catch (error) {
      console.error(error)
      alert('Wrong email or password')
    }
  }

  return (
    <>
      <div>{localStorage.getItem('username')}</div>
      <div className="login">
        <div className="loginWrapper">
          <div className="form-group">
            <input
              onChange={onChangeHandler}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={onChangeHandler}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <input
            className="submit"
            onClick={onClickHandler}
            type="submit"
            value="LOGIN"
          />
        </div>
      </div>
    </>
  )
}

export default Login
