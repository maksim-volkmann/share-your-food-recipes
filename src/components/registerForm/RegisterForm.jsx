import axios from 'axios'
import { useState } from 'react'
import './registerForm.scss'

const RegisterForm = () => {
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    email: '',
    password: '',
  })
  console.log('Register Info')
  console.log(registerInfo)
  const onChangeHandler = (e) => {
    setRegisterInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const registerNewUser = async () => {
    try {
      console.log(registerInfo)
      const res = await axios.post(
        'http://localhost:5000/api/register',
        registerInfo,
        { withCredentials: true },
      )
      console.log(`res: `)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Register a new account</h1>
      <div className="register">
        <div className="registerWrapper">
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              onChange={onChangeHandler}
              type="text"
              name="username"
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email: </label>
            <input
              onChange={onChangeHandler}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              onChange={onChangeHandler}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <input onClick={registerNewUser} type="submit" value="REGISTER" />
        </div>
      </div>
    </>
  )
}

export default RegisterForm
