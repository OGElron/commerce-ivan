import React from 'react'
import { useState } from 'react'

export default function Checkout() {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [cel, setCel] = useState();


  return (
   <>
   <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={(e)=> setNombre(e.target.value)} type="name" placeholder="Ingrese su nombre" />
      </Form.Group>

      <Form.Group onChange={(e)=> setEmail(e.target.value)} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
      </Form.Group>
    
      <Form.Group onChange={(e)=> setCel(e.target.value)} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="phone" placeholder="Ingrese su telefono" />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={()=>{vaciarCarrito()}}><Link className= 'link' to='../'>CHECKOUT</Link></Button>
    </Form>
   </>
  )
}

