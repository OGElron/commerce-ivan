import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap"
import CartWidget from "./CartWidget"

function NavBar() {
    return <>
    {
  <Navbar bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Athlos.ar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Inicio</Nav.Link>
    <Nav.Link href="#Tienda">Tienda</Nav.Link>
    <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
    <Nav.Link href="#Contacto">Contacto</Nav.Link>
  </Nav>
  <CartWidget/>
  </Container>
</Navbar>

  }
  </>
}
export default NavBar
