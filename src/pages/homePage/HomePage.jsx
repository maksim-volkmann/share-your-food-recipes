import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import HomeBody from '../../components/homeBody/HomeBody'
import NavBar from '../../components/navBar/NavBar'
import NewRecipeForm from '../../components/newRecipeForm/NewRecipeForm'
import UsersRecipes from '../../components/usersRecipes/UsersRecipes'
import './homePage.scss'
import RecipeTest from './RecipeTest.jsx'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header
        title="New Recipes Every Day"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur earum magnam non enim, quia quam qui! Ratione nemo ex ducimus, rerum similique odit distinctio. Odio fuga dicta nihil illo."
        button="Browse Recipes"
      />
      <UsersRecipes />
      <NewRecipeForm />
      <HomeBody />
      <Newsletter
        title={'Join our newletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
      <RecipeTest />
    </>
  )
}

export default HomePage
