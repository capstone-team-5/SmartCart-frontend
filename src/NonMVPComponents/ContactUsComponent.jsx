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

      // hide message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      setMessage("An error occurred while sending the email.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="text-center">
          <img
            src="https://actionenvelope.scene7.com/is/image/ActionEnvelope/LEVC-07?hei=413&wid=510&fmt=jpeg&qlt=75&bgc=ffffff"
            alt="envelope"
            className="mx-auto w-24 h-24"
          />
          <h3 className="text-3xl text-blue-600 mt-4">Drop Us a Message</h3>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div>
              <label
                htmlFor="user_name"
                className="text-gray-600 font-semibold"
              >
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                autoFocus
                placeholder="Your Full Name..."
                className="w-full rounded-lg py-2 px-3 mt-1 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="text-gray-600 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                placeholder="Your Email..."
                className="w-full rounded-lg py-2 px-3 mt-1 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="user_subject"
              className="text-gray-600 font-semibold"
            >
              Subject of the email
            </label>
            <input
              type="text"
              name="user_subject"
              id="user_subject"
              placeholder="Subject: "
              className="w-full rounded-lg py-2 px-3 mt-1 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-gray-600 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              required
              placeholder="Your Message..."
              className="w-full rounded-lg py-2 px-3 mt-1 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              style={{ width: "100%", height: "150px" }}
            />
          </div>
          <div className="text-center mt-6">
            <input
              type="submit"
              name="btnSubmit"
              className="w-2/3 md:w-1/2 bg-red-500 text-white font-semibold rounded-lg py-2 px-4 cursor-pointer hover:bg-red-600 transition duration-300"
              value="Send Message"
            />
          </div>
        </form>
        {message && (
          <div className="text-center text-red-600 mt-4">{message}</div>
        )}
      </div>
    </div>
  );
};

export default ContactUsComponent;
