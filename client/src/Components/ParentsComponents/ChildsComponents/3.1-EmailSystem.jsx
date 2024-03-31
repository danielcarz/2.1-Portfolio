import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';

//contex
import { Contex } from '../../Hooks/Contex/CreateContext';

//styles
import '../../../Sass/SassComponents/SassChildComponents/3.1-EmailSystem.scss'

export const EmailSystem = () => { 

  const { isTrue } = useContext( Contex );

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
    <form className='formContainer' ref={form} onSubmit={sendEmail} style={{ backgroundColor: 'none'  }}>
      
      <h2> Dejame un mensaje </h2>

     {/*  <label className='label'>Name</label>
      <input  className='input' type="text" name="user_name" />

      <label>Email</label>
      <input className='input' type="email" name="user_email" /> */}
 
      
      <textarea name="message" className= { ( isTrue ) ? 'darkMode' : 'lightMode' } placeholder="Escribe tu mensaje aqui"/>
      <input  className= { ( isTrue ) ? 'darkModeButton' : 'lightModeButton' }  type="submit" value="Send" />

    </form>
  );
};