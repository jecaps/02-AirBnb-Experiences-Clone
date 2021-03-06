import phoneIcon from "../images/phone-icon.png";
import mailIcon from "../images/mail-icon.png";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.image} alt="Cat" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phoneIcon} alt="phone-icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} alt="mail-icon" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
