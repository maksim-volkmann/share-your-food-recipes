import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoggedContext from '../../context/LoggedInChecker'
import HomePage from '../../pages/homePage/HomePage'
import LoginPage from '../../pages/loginPage/LoginPage'
import RecipesPage from '../../pages/recipesPage/RecipesPage'
import RecipePage from '../../pages/recipePage/RecipePage'
import RegisterPage from '../../pages/registerPage/RegisterPage'

const NavRouter = () => {
  const { isLoggedIn } = useContext(LoggedContext)
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {isLoggedIn === false && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </>
        )}

        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </>
  )
}

export default NavRouter
