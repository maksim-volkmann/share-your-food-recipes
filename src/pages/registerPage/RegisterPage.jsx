import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import RegisterForm from '../../components/registerForm/RegisterForm'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'

const RegisterPage = () => {
  return (
    <>
      <NavBar />
      <Header
        title="Registration page"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequuntur earum magnam non enim, quia quam qui! Ratione nemo ex ducimus, rerum similique odit distinctio. Odio fuga dicta nihil illo."
        button="Register here now!"
      />
      <RegisterForm />
      <Newsletter
        title={'Join our newletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
    </>
  )
}

export default RegisterPage
