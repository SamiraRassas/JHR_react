import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qucmuho', 'template_r78jo8h', form.current, 'EoTyA-SK01_R64lCV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div class="contact">
      <form ref={form} onSubmit={sendEmail} class="contact-form">

        <h2 class="title">Contact us</h2>
        <h5 class="description">Feel free to contact us if you want to ask any question, or you need help.
        </h5>
        <h6>We will contact you as soon as possible</h6>
        <div>
          <input type="text" id="name" placeholder="Name" name="user_name" required />
        </div>
        <div>
          <input type="email" id="name" placeholder="Email" name="user_email" required />
        </div>
        <div>
          <textarea id="message" name="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
        </div>
        <div class="submit-button-wrapper">
          <input type="submit" id="sendbtn" value="Send" />
        </div>
      </form>
    </div>
  );
};
export default ContactUs;