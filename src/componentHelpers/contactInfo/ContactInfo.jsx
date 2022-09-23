import "./contactInfo.scss";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneAndroid } from "react-icons/md";

const ContactInfo = ({
  title,
  addressTitle,
  address,
  emailTitle,
  email,
  phoneTitle,
  phone,
}) => {
  return (
    <div className="contactInfoWrapper">
      <div>
        <h1>{title}</h1>
      </div>
      <div className="contactInfoContent">
        <div className="contactInfoItem">
          <div className="icons">
            <FiMapPin />
          </div>
          <h2>{addressTitle}</h2>
          <p>{address}</p>
        </div>
        <div className="contactInfoItem">
          <div className="icons">
            <HiOutlineMail />
          </div>
          <h2>{emailTitle}</h2>
          <p>{email}</p>
        </div>
        <div className="contactInfoItem">
          <div className="icons">
            <MdPhoneAndroid />
          </div>
          <h2>{phoneTitle}</h2>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;