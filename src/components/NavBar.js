
import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './Logo.js';
import CartWidget from './CartWidget.js';
import Envelop from '../assets/email.png';
import { useOrder } from './CartContext';

export default function NavBar() {
  let Order = useOrder();

  return (
    <Navbar collapseOnSelect expand="lg" className="Nav-Style" variant="dark">
      <Logo />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/types-products">
            Perfumes
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            Nuestra Empresa
          </Nav.Link>
          {Order.length > 0 ? <CartWidget /> : null}
          <Nav.Link as={Link} to="/contact">
            <img src={Envelop} alt="contactImages" className="EmailContact" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}