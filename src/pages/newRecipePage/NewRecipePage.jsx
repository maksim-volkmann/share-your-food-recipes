import './newRecipePage.scss'
import NavBar from '../../components/navBar/NavBar'
import NewRecipeForm from '../../components/newRecipeForm/NewRecipeForm'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const NewRecipePage = () => {
  return (
    <>
      <NavBar />
      <div className="homepage-header">
        <Header
          className="home-header"
          title="Add Your New Recipe Here!"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur earum magnam non enim, quia quam qui! Ratione nemo ex ducimus, rerum similique odit distinctio. Odio fuga dicta nihil illo."
          button="Browse Recipes"
        />
      </div>
      <NewRecipeForm
        optionTitle="Select good for:"
        option1="Breakfast"
        option2="Lunch"
        option3="Dinner"
        option4="Snack"
      />
      <Footer />
    </>
  )
}

export default NewRecipePage
