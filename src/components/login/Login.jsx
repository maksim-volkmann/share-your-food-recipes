import './login.scss'
import { useContext } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import LoggedContext from '../../context/LoggedInChecker'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })
  const [curr, setCurrentUser] = useState({ username: '', id: '' })

  const { userLoggedInInfo } = useContext(LoggedContext)
  const history = useNavigate()

  // useEffect(() => {
  //   const onClickHandler = async () => {
  //     try {
  //       console.log(loginInfo)
  //       const { data } = await axios.post(
  //         'http://localhost:5000/api/login',
  //         loginInfo,
  //         { withCredentials: true },
  //       )
  //       setCurrentUser(data)
  //       await userLoggedInInfo()
  //       console.log('data')
  //       console.log(data.data)
  //       // localStorage.setItem('username', response.data.username)
  //       return data
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // })

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

  const onClickHandler = async (req, res) => {
    try {
      console.log(loginInfo)
      const response = await axios.post(
        'http://localhost:5000/api/login',
        loginInfo,
        { withCredentials: true },
      )
      await userLoggedInInfo()
      history('/')
      console.log(req)
      console.log(res)
      console.log(`res: `)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
      alert('Wrong email or password')
    }
  }

  return (
    <>
      <div>{localStorage.getItem('username')}</div>
      <div>{onClickHandler}</div>
      <div className="login">
        <div className="loginWrapper">
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
