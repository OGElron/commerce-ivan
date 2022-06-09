import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap"
import CartWidget from "./CartWidget"

function NavBar() {
    return <>
    {
  <Navbar bg="primary" variant="dark">
  <Container>
  <Navbar.Brand>Athlos.ar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link to="./Home">Home</Nav.Link>
    <Nav.Link to="./Tienda">Tienda</Nav.Link>
    <Nav.Link to="./Nosotros">Nosotros</Nav.Link>
    <Nav.Link to="./Contacto">Contacto</Nav.Link>
  </Nav>
  <CartWidget/>
  </Container>
</Navbar>

  }
  </>
}
export default NavBar
