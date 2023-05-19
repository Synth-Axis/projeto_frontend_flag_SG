import "./ContactUs.scss";
import Button from "../../components/Button";
import Input from "../../components/Input";

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-top">
        <p>CONTACT US</p>
        <h1>Let’s Start a Conversation</h1>
        <p>
          Partner up with us for publicity and joint ventures to become a
          contributer and addon development.
        </p>
      </div>
      <section className="company-info">
        <div className="inner-wrapper">
          <div className="inner-title">
            <p>Working Hours</p>
          </div>
          <div className="info-details">
            <h5>Monday To Friday</h5>
            <h5>9:00 AM to 8:00 PM </h5>
            <p>Our Support Team is available 24/7</p>
          </div>
        </div>
        <div className="inner-wrapper">
          <div className="inner-title">
            <p>Contact Us</p>
          </div>
          <div className="info-details">
            <h5>020 7993 2905</h5>
            <p>info@wowdaily.com</p>
          </div>
        </div>
      </section>
      <form id="contactForm" className="form">
        <Input class="input" type="text" placeholder="Full Name" />
        <Input class="input" type="email" placeholder="Your Email" />
        <select className="input" id="subject" name="subject">
          <option>Select Subject</option>
          <option value="Join Us">Join Us</option>
          <option value="Partnership">Partnership</option>
          <option value="Just Say Hi">Just Say Hi</option>
        </select>
        <Input class="input" placeholder="Message" />
        <Button text="Send Message" class="btn-send-msg" />
      </form>
    </div>
  );
};

export default ContactUs;
