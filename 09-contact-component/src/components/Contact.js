import phoneIcon from "../images/phone-icon.png";
import mailIcon from "../images/mail-icon.png";

export default function Contact({ image, name, phone, email }) {
  return (
    <div className="contact-card">
      <img src={image} alt="Cat" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phoneIcon} alt="phone-icon" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} alt="mail-icon" />
        <p>{email}</p>
      </div>
    </div>
  );
}
