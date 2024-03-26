import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailSystem = () => { 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm('service_nhjj9dv', 'template_px1bhpu', form.current, {
        publicKey: '11U8XeFZ3D7bIW33Q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};