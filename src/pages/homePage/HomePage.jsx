import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import HomeBody from '../../components/homeBody/HomeBody'
import NavBar from '../../components/navBar/NavBar'
import './homePage.scss'
import RecipeTest from './RecipeTest.jsx'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <HomeBody />
      <Footer />
      <RecipeTest />
    </>
  )
}

export default HomePage
