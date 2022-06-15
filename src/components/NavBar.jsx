import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap"
import CartWidget from "./CartWidget"
import {Link} from 'react-router-dom'

function NavBar() {
    return <>
    {
  <Navbar bg="primary" variant="dark">
  <Container>
  <Navbar.Brand><Link to= "./Home">Athlos.ar</Link></Navbar.Brand>
  <Nav className="me-auto">
    <Link to="./Nosotros">Nosotros</Link>
    <Link to="./Contacto">Contacto</Link>
  </Nav>
  <CartWidget/>
  </Container>
</Navbar>

  }
  </>
}
export default NavBar
