import './homePage.scss'

import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import HomeBody from '../../components/homeBody/HomeBody'
import NavBar from '../../components/navBar/NavBar'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'
import AllRecipes from '../../components/allRecipes/AllRecipes'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="homepage-header">
        <Header
          className="home-header"
          title="New Recipes Every Day"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur earum magnam non enim, quia quam qui! Ratione nemo ex ducimus, rerum similique odit distinctio. Odio fuga dicta nihil illo."
          button="Browse Recipes"
        />
      </div>
      <AllRecipes />
      {/* <UsersRecipes /> */}
      <HomeBody />
      <Newsletter
        title={'Join our newletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
    </>
  )
}

export default HomePage
