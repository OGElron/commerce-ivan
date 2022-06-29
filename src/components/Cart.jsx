import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CarritoVacio from './CarritoVacio';
import {Button, Form, Card} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Cart() {
  const { carrito, quitarCarrito, precioProductos, vaciarCarrito, cantidadProductos } = useContext(CartContext);
  const [terminar, setTerminar] = useState(false)

  return (
    <>
    {carrito.length > 0 ? (carrito.map(({thumbnail, nombre, precio, id, count})=>
  
    <div className='carrito'>
        <img style={{height:'70px', width:'70px'}} src='{thumbnail}'></img>
        <h4 className='itemCarrito'>{nombre}</h4>
        <h4 className='itemCarrito'>${precio}</h4>
        <h4 className='itemCarrito'>{count}</h4>
        <h4>{}</h4>
        <Button onClick={()=>{quitarCarrito(id)}}>Remover</Button>
    </div>
  
    )): 
    <CarritoVacio/>
    }
   

    <div>
      <br />
      <h2>Cantidad Total {cantidadProductos()}</h2>
      <Button onClick={()=>{vaciarCarrito()}}>Vaciar Carrito</Button>
      <Button onClick={()=>setTerminar(true)}>Terminar compra</Button>
      {/* solamente se puede usar una vez, tira [object, Object] y despues se rompe
      <p>Total: {precioProductos()}</p> */}
      {terminar? 
        <div>
        <h1>SU COMPRA</h1>
        {/* <h3>Cantidad : {cantidadProductos()}</h3>
        <h3>Total : {precioProductos()}</h3> */}
    <Card>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Ingrese su nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="phone" placeholder="Ingrese su telefono" />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={()=>{vaciarCarrito()}}><Link to='../'>CHECKOUT</Link></Button>
    </Form>
    </Card>
        </div> : (false)
        }
    </div>
    </>
  )
}