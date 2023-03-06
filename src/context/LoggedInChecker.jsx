import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import env from 'react-dotenv'

const LoggedContext = createContext()

const LoggedInChecker = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined)
  const userLoggedInInfo = async () => {
    const isLoogedInRes = await axios.get(
      env.API_LINK + '/api/islogged',
      {
        withCredentials: true,
      },
    )
    // console.log(`State is: ${isLoogedInRes.data}`)
    setIsLoggedIn(isLoogedInRes.data)
  }

  useEffect(() => {
    userLoggedInInfo()
  }, [])

  return (
    <LoggedContext.Provider value={{ isLoggedIn, userLoggedInInfo }}>
      {props.children}
    </LoggedContext.Provider>
  )
}

export default LoggedContext
export { LoggedInChecker }
