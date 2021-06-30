import React from 'react';
import emailjs from 'emailjs-com';


export default function Form() {

  function sendEmail(e) {
    //e.preventDefault();

    emailjs.sendForm('gmail', 'template_ltxDFlly', e.target, 'user_v7oQvTIWe2cMKcNAcH4MC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
    
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Company</label>
      <input type="text" name="user_name" />
      <label>Position</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="przycisk_nawigacja white-text"
      type="submit" value="Send" />
    </form>
  );
}