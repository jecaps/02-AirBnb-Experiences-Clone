import whiskerson from "../images/mr-whiskerson.png";
import phoneIcon from "../images/phone-icon.png";
import mailIcon from "../images/mail-icon.png";

export default function Contact() {
  return (
    <div>
      <div className="contact-card">
        <img src={whiskerson} alt="Cat" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phoneIcon} alt="phone-icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail-icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={whiskerson} alt="Cat" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phoneIcon} alt="phone-icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail-icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={whiskerson} alt="Cat" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phoneIcon} alt="phone-icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail-icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={whiskerson} alt="Cat" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phoneIcon} alt="phone-icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail-icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>
    </div>
  );
}
