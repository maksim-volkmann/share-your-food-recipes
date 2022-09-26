import './contactPage.scss'
import Contact from '../../components/contact/Contact'
import NavBar from '../../components/navBar/NavBar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <div className="contact-header">
        <Header
          title="Contact Us"
          description="If you have any question, don't be afraid to contact us! We are always ready to help you!"
          button="START WRITING NOW !"
        />
      </div>
      <Contact />
      <Newsletter
        title={'Join our newsletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
      <Footer />
    </>
  )
}

export default ContactPage
