import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
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
      setMessage("Email sent successfully!");
    } catch (error) {
      setMessage("An error occurred while sending the email.");
      console.error(error);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        required
        autoFocus
        placeholder="Your Full Name..."
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        required
        placeholder="Your Email..."
      />
      <label>Message</label>
      <textarea
        name="message"
        rows="3"
        required
        placeholder="Your Message..."
      />
      <input type="submit" value="Send" />
      <div>{message}</div>
    </form>
  );
};

export default ContactUs;
