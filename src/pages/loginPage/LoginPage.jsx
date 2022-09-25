import './loginPage.scss'
import NavBar from '../../components/navBar/NavBar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Login from '../../components/login/Login'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <Header
        title="Login page"
        description="Log in, so you can share you amazing recipes here!"
        button="Log In"
      />
      <Login />
      <Newsletter
        title={'Join our newletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
    </>
  )
}

export default LoginPage
