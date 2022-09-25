import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import Recipe from '../../components/recipe/Recipe'
import Header from '../../components/header/Header'

const RecipePage = () => {
  return (
    <>
      <NavBar />
      <Header
        title="New Recipes Every Day"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur earum magnam non enim, quia quam qui! Ratione nemo ex ducimus, rerum similique odit distinctio. Odio fuga dicta nihil illo."
        button="Browse Recipes"
      />
      <Recipe />
      <Footer />
    </>
  )
}

export default RecipePage
