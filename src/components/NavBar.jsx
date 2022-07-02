import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap"
import CartWidget from "./CartWidget"
import {Link} from 'react-router-dom'

function NavBar() {
    return <>
    {
  <Navbar bg="primary" variant="dark">
  <Container>
  <Navbar.Brand><Link className='link'to= "./">Athlos.ar</Link></Navbar.Brand>
  <Nav className="me-auto">
    <Link className='link'to="./Nosotros">Nosotros</Link>
    <Link className='link'to="./Contacto">Contacto</Link>
    <Link className='link'to="./Cart">Carrito</Link>
  </Nav>
  <CartWidget/>
  </Container>
</Navbar>

  }
  </>
}
export default NavBar
