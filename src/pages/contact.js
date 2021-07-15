import React from 'react';
import BoxForm from '../components/BoxForm.js';
const HEADERFORM = 'Contactenos';


function Contact() {
  let sendForm = (e) => {
    e.preventDefault();
  };
  return <BoxForm clickFN={sendForm} header={HEADERFORM} />;
}

export default Contact;