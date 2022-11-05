import { Button } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import "../styles/contact.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Contact() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    toast.success("Thank you for reaching out!");
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-inputs">
          <h1>Contact Me</h1>
          <h4>Hi there, contact me to ask about anything you have in mind</h4>
          <form>
            <div className="names">
              <div className="first">
                <label>First Name</label>
                <input
                  id="first_name"
                  className="inputs"
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="last">
                <label>Last Name</label>
                <input
                  id="last_name"
                  className="inputs"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="email-div">
              <label>Email</label>
              <input
                id="email"
                className="inputs"
                type="text"
                placeholder="yourname@email.com"
                required
              />
            </div>

            <div className="message-div">
              <label>Message</label>
              <input
                id="message"
                className="message-area"
                type="text"
                placeholder="Send a message and I'll reply as soon as possible"
              />
            </div>
            <div className="check-div">
              <input className="check" type="checkbox" required />
              <label>
                You agree to provide your data to Evans who may contact you
              </label>
            </div>
            <div className="btn">
              <Button
                onClick={handleClick}
                id="btn__submit"
                variant="contained"
                type="submit"
                style={{ width: "100%" }}
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
