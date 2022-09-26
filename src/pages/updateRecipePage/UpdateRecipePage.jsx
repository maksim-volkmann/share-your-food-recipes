import './updateRecipePage.scss'
import NavBar from '../../components/navBar/NavBar'
import Header from '../../components/header/Header'
import UpdateRecipeForm from '../../components/updateRecipeForm/UpdateRecipeForm'
import Footer from '../../components/footer/Footer'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'

const UpdateRecipePage = () => {
  return (
    <>
      <NavBar />
      <div className="update-your-recipe-header">
        <Header
          title="You can update your recipe here!"
          description="You can make any changes you want and we will save it for you!"
          button="Browse Recipes"
        />
      </div>
      <UpdateRecipeForm
        optionTitle="Select good for:"
        option1="Breakfast"
        option2="Lunch"
        option3="Dinner"
        option4="Snack"
      />
      <Newsletter
        title={'Join our newletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
    </>
  )
}

export default UpdateRecipePage
