import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUsComponent = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      const name = form.current.user_name.value;
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      const email = form.current.user_email.value;

      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_API_URL
      );
      event.target.reset();
      setMessage(
        `Thank you, ${capitalizedName}! Your message has been received successfully. We will reply to ${email}.`
      );

      // Hide message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
      setUserName("");
      setUserEmail("");
    } catch (error) {
      setMessage("An error occurred while sending the email.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="text-center">
          <img
            src="https://actionenvelope.scene7.com/is/image/ActionEnvelope/LEVC-07?hei=413&wid=510&fmt=jpeg&qlt=75&bgc=ffffff"
            alt="envelope"
            className="mx-auto w-24 h-24 -mt-8"
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
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
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
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
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
              style={{ width: "100%", minHeight: "150px" }}
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
          <div className="text-center text-green-600 mt-4">{message}</div>
        )}
      </div>
    </div>
  );
};

export default ContactUsComponent;

