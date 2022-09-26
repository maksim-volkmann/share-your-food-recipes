import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const LoggedContext = createContext()

const LoggedInChecker = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined)
  const userLoggedInInfo = async () => {
    const isLoogedInRes = await axios.get(
      'http://localhost:5000/api/islogged',
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
