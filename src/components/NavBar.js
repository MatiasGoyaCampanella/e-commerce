
import React from 'react';
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';
import { Navbar,Nav,NavDropdown,Button,Form,FormControl } from 'react-bootstrap';
export default function NavBar() {
    return (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">
  <CartWidget/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll>
        
      <NavLink href="#action1">Home</NavLink>
      <NavLink href="#action2">Link</NavLink>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <NavLink href="#" disabled>
        Link
      </NavLink>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
 
</Navbar>
    )
}

