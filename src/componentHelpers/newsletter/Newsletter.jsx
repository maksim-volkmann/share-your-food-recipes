import "./newsletter.scss";

const Newsletter = ({ title, btnTitle }) => {
  return (
    <div className="newsletterContainer">
      <div className="newsletterContent">
        <div className="newsletterText">
          <h2>{title}</h2>
        </div>
        <div className="newsletterInput">
          <input name="email" type="email" />
        </div>
        <div className="newsletterBtn">
          <button>{btnTitle}</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
