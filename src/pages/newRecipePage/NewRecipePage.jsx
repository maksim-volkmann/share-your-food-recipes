import './newRecipePage.scss'
import NavBar from '../../components/navBar/NavBar'
import NewRecipeForm from '../../components/newRecipeForm/NewRecipeForm'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'

const NewRecipePage = () => {
  return (
    <>
      <NavBar />
      <div className="newrecipe-header">
        <Header
          title="Add Your New Recipe Here!"
          description="Do you any good recipe? Share with us, so others can enjoy them too!"
          button="Add your recipe now!"
        />
      </div>
      <NewRecipeForm
        optionTitle="Select good for:"
        option1="Breakfast"
        option2="Lunch"
        option3="Dinner"
        option4="Snack"
      />
      <Newsletter
        title={'Join our newsletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
    </>
  )
}

export default NewRecipePage
