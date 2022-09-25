import "./contactForm.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = ({ title, description }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "1N1hs-z2K25-xf25q"
      )
      .then((result) => {
        try {
          form.current.reset();
          console.log(result.text);
        } catch (error) {
          console.log(error.text);
        }
      });
  };

  return (
    <div className="contactFormWrapper">
      <h1>{title}</h1>
      <div>
        <p>{description}</p>
      </div>
      <div className="contactFormContent">
        <div className="contactFromDetails">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Last Name" name="user_last_name" />
            <input type="email" placeholder="Email Address" name="user_email" />
            <input
              type="number"
              placeholder="Phone Number"
              name="user_phone_number"
            />
            <textarea type="text" placeholder="Message" name="message" />
            <input id="submitBtn" type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
