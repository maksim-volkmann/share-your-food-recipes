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
          description="Hello and welcome to the Code&Cook website. Here you can register and share all your favorit recipes with others and ofcorse get inspiration for others!"
          button="Browse Recipes"
        />
      </div>
      <AllRecipes
      title={"ALL YOUR FAVORITE RECIPES"}
      linkTitle={"Make this"} />
      <HomeBody />
      <Newsletter
        title={'Join our newsletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
    </>
  )
}

export default HomePage
