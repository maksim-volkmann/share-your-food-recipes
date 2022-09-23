import './login.scss'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })

  const onChangeHandler = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  console.log('🚀 loginInfo', loginInfo)

  // const getAllUsers = () => {
  //   axios.get('http://localhost:5000/api/get').then((response) =>
  //     console.log(response),
  //   )
  // }

  // const [currentUser, setCurrentUser] = useState('')

  const getCurrentUser = async (req, res) => {
    try {
      const answer = await axios.get(`http://localhost:5000/api/get/`, {
        withCredentials: true,
      })

      console.log(answer.data.username)
      console.log(req)
      return answer.data.username
      // console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  const onClickHandler = async () => {
    try {
      console.log(loginInfo)
      const res = await axios.post(
        'http://localhost:5000/api/login',
        loginInfo,
        { withCredentials: true },
      )
      console.log(`res: `)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.error(error)
    }
  }

  const getAllUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/get/_id', {
        withCredentials: true,
      })
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div></div>
      <button onClick={getCurrentUser}>GET CURRENT USER</button>
      <div className="login">
        <div className="loginWrapper">
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
          <input onClick={onClickHandler} type="submit" value="LOGIN" />
          <button onClick={getAllUsers}>GET ALL USERS</button>
        </div>
      </div>
    </>
  )
}

export default Login
