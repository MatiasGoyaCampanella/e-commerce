
import React from 'react';
import './Logo.css';
import logo from '../assets/logo.jpeg';

function Logo() {
  return (
    <div>
      <img src={logo} className="Logo-Brand" alt="logo" />
      {/*<div class="circulo">
            <span id="numero"> 0 </span> 
         </div> */}
    </div>
  );
}

export default Logo;