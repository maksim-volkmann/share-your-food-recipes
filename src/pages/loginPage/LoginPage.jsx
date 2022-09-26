import './loginPage.scss'
import NavBar from '../../components/navBar/NavBar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import LoginForm from '../../components/loginForm/LoginForm'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <div className="loginpage-header">
        <Header
          title="Login page"
          description="Log in, so you can share you amazing recipes here!"
          button="Go and log in NOW"
        />
      </div>
      <LoginForm />
      <Newsletter
        title={'Join our newsletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
    </>
  )
}

export default LoginPage
