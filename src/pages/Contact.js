import React from "react";
import "../styles/contact.css";

function Contact() {
  const handleSubmit = () => {};

  return (
    <div className="contact-container">
      <div className="contact-inputs">
        <h1>Hi there, contact me to ask about anything you have in mind</h1>
        <form onSubmit={handleSubmit}>
          <div className="names">
            <input
              className="first"
              type="text"
              placeholder="Enter your last name"
            />
            <input
              className="last"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="email-div">
            <label>Email</label>
            <input
              className="email"
              type="text"
              placeholder="Send a message and I'll reply as soon as possible"
            />
          </div>

          <input className="check" type="checkbox" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
