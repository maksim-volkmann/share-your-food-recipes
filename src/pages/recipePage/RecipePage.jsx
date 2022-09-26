import './recipePage.scss'

import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import Recipe from '../../components/recipe/Recipe'
import Header from '../../components/header/Header'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'

const RecipePage = () => {
  return (
    <>
      <NavBar />
      <div className="recipePage-header">
        <Header
          title="Share with others."
          description="Try this recipe and write in the comments how did you liked it!"
          button="Browse Recipes"
        />
      </div>
      <Recipe />
      <Newsletter
        title={'Join our newletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
    </>
  )
}

export default RecipePage
