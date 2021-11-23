import './Contact.scss';
import React, {useState, useEffect} from 'react';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="title-contact-container">
              <h2>Let's talk.</h2>
              <p>Email is the quickest way to get in touch with me. I typically respond within 24 hours. Get in touch via the form below, or by emailing ethancannelongo@gmail.com.</p>
        </div>

          <div className="form-contact-container">
            <form>
              <input type="name" placeholder="Name"/>
              <input type="email" placeholder="Email"/>
              <textarea placeholder="Message" cols="30" rows="10"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
      </div>
  );
};

export default Contact;
