import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoggedContext from '../../context/LoggedInChecker'
import HomePage from '../../pages/homePage/HomePage'
import LoginPage from '../../pages/loginPage/LoginPage'
import RecipesPage from '../../pages/recipesPage/RecipesPage'
import RecipePage from '../../pages/recipePage/RecipePage'
import RegisterPage from '../../pages/registerPage/RegisterPage'
import EditRecipe from '../updateRecipe/EditRecipe'
import ContactPage from '../../pages/contactPage/ContactPage'
import NewRecipePage from '../../pages/newRecipePage/NewRecipePage'

import UpdateRecipePage from '../../pages/updateRecipePage/UpdateRecipePage'

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

        {isLoggedIn === true && (
          <>
            <Route path="/recipe/:id/edit" element={<EditRecipe />} />
            <Route path="/update/:id" element={<UpdateRecipePage />} />
            <Route path="/newrecipe" element={<NewRecipePage />} />
          </>
        )}
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/recipes" element={<RecipesPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default NavRouter
