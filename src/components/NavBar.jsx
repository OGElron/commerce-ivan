import React from 'react';
import { Nav, Navbar, Container, Image } from "react-bootstrap"
import CartWidget from "./CartWidget"
import {Link} from 'react-router-dom'

function NavBar() {
    return <>
    {
  <Navbar className='menu' bg="primary" variant="dark">
  <Container>
  <Navbar.Brand><Link className='link'to= "./"><Image src='https://imgur.com/iDUvSRr.png' style={{width: 200 , height: 80}}></Image></Link></Navbar.Brand>
  <Nav className="me-auto gap-4">
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
