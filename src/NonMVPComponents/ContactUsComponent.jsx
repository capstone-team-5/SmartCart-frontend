import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUsComponent = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_API_URL
      );
      event.target.reset();
      setMessage("Email sent successfully!");

      // hide result after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      setMessage("An error occurred while sending the email.");
      console.error(error);
    }
  };

  return (
    <div className="container contact-form">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form ref={form} onSubmit={sendEmail} className="mb-6">
        <h3>Drop Us a Message</h3>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                required
                autoFocus
                placeholder="Your Full Name..."
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email..."
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Send" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="3"
                required
                placeholder="Your Message..."
              />
            </div>
          </div>
        </div>
      </form>

      {message && <div>{message}</div>}
    </div>
  );
};

export default ContactUsComponent;
