import "./ContactUs.scss";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSubject, setErrorSubject] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (event) => {
    setErrorName("");
    setErrorEmail("");
    setErrorSubject("");
    setErrorMessage("");

    const emailRegex = /\S+@\S+\.\S+/;

    event.preventDefault();
    if (fullName.length === 0) {
      setErrorName("error");
    }

    if (email.length === 0 || !emailRegex.test(email)) {
      setErrorEmail("error");
    }

    if (subject === "") {
      setErrorSubject("error");
    }

    if (message.length < 20) {
      setErrorMessage("error");
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-top">
        <p className="contact-title">CONTACT US</p>
        <h1 className="contact-subtitle">Let's Start a Conversation</h1>
        <p className="contact-text">
          Partner up with us for publicity and joint ventures to become a
          contributer and addon development.
        </p>
      </div>
      <div>
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

        <form
          onSubmit={validateForm}
          id="contactForm"
          className="form"
          noValidate
        >
          <Input
            class="input"
            type="text"
            placeholder="Full Name"
            onChange={(element) => {
              setFullName(element.target.value);
            }}
          />
          {errorName === "error" && (
            <label>Please provide your full name</label>
          )}
          <Input
            class="input"
            type="email"
            placeholder="Your Email"
            onChange={(element) => {
              setEmail(element.target.value);
            }}
          />
          {errorEmail === "error" && (
            <label>Please provide a valid E-mail</label>
          )}
          <select
            className="input"
            id="subject"
            name="subject"
            onChange={(element) => {
              setSubject(element.target.value);
            }}
          >
            <option>Select Subject</option>
            <option value="Join Us">Join Us</option>
            <option value="Partnership">Partnership</option>
            <option value="Just Say Hi">Just Say Hi</option>
          </select>
          {errorSubject === "error" && <label>Please provide a subject</label>}
          <Input
            class="input"
            placeholder="Message"
            onChange={(element) => {
              setMessage(element.target.value);
            }}
          />
          {errorMessage === "error" && (
            <label>Please type a valid message (min. 20 chars.)</label>
          )}
          <Button type="submit" text="Send Message" class="btn-send-msg" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
