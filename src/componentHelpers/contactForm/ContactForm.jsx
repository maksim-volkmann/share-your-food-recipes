import "./contactForm.scss";

const ContactForm = ({ title, description, btnTitle }) => {
  return (
    <div className="contactFormWrapper">
      <h1>{title}</h1>
      <div>
        <p>{description}</p>
      </div>
      <div className="contactFormContent">
        <div className="contactFromDetails">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="number" placeholder="Phone Number" />
        </div>
        <div className="contactFormMessage">
          <input id="messageBox" type="text" placeholder="Message" />
          <button>{btnTitle}</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
