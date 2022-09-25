import Contact from "../../components/contact/Contact";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./contactPage.scss";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;