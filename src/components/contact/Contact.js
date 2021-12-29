import "./Contact.scss";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
// const Config = require("../../../Configuration.js");

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (email !== "" && name !== "" && message !== "") {
      var templateParams = {
        email: "ethancannelongo@gmail.com",
        from_name: name,
        message: message,
        reply_to: email,
        from_email: email,
      };

      emailjs.init(EMAIL_USER_ID);
      try {
        const response = emailjs.send(
          EMAIL_SERVICE_ID,
          EMAIL_TEMPLATE_ID,
          templateParams
        );
        setSuccessMsg(true);
      } catch (error) {
        console.log("FAILED...", error);
      }
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className='title-contact-container'>
        <h2>Let's talk.</h2>
        <p>
          Email is the quickest way to contact me. I typically respond within 24
          hours. Get in touch via the form, or by emailing
          ethancannelongo@gmail.com.
        </p>
      </div>

      <div className='form-contact-container'>
        <form onSubmit={handleSubmit}>
          <input
            type='name'
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            placeholder='Message'
            cols='30'
            rows='10'
            value={message}
            onChange={e => setMessage(e.target.value)}></textarea>
          <button type='submit'>Submit</button>
          {successMsg && <span>"Thanks, I will reply soon!"</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
