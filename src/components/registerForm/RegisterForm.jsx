import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './registerForm.scss'
import env from 'react-dotenv'

const RegisterForm = () => {
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    email: '',
    password: '',
  })

  const history = useNavigate()

  const onChangeHandler = (e) => {
    setRegisterInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const registerNewUser = async () => {
    try {
      console.log(registerInfo)
      await axios.post(env.API_LINK + '/api/register', registerInfo, {
        withCredentials: true,
      })

      history('/login')
      alert(
        `User ${registerInfo.username} successfully registered. You can log in now!`,
      )
    } catch (error) {
      console.error(error)
      alert('You missed some fields. Please try again!')
    }
  }

  return (
    <>
      <div className="register">
        <div className="registerWrapper">
          <div className="form-group">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              onChange={onChangeHandler}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <input
            className="submit"
            onClick={registerNewUser}
            type="submit"
            value="REGISTER"
          />
        </div>
      </div>
    </>
  )
}

export default RegisterForm
