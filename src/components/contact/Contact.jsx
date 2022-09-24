import ContactInfo from "../../componentHelpers/contactInfo/ContactInfo";
import "./contact.scss";
import Newsletter from "../../componentHelpers/newsletter/Newsletter";
import ContactForm from "../../componentHelpers/contactForm/ContactForm";
import ContactMap from "../../componentHelpers/contactMap/ContactMap";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <ContactInfo
          title="Contact"
          addressTitle="Address"
          address="Happy Coding and Cooking"
          emailTitle="Email"
          email="info.cookandcode@gmail.com"
          phoneTitle="Phone"
          phone="8888888"
        />
        <ContactMap />
        <ContactForm
          title="Get In Touch With Us"
          description="Please fill this form and we will get in touch with you as soons as possible."
          btnTitle={"Send"}
        />
      </div>
      <Newsletter title={"Join our newsletter and get the latest recipes!"} />
    </>
  );
};

export default Contact;
