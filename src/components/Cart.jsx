import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CarritoVacio from './CarritoVacio';
import {Button} from 'react-bootstrap';
import ItemCount from './ItemCount';

export default function Cart(producto) {
  const { carrito, quitarCarrito, precioProductos, vaciarCarrito, cantidadProductos } = useContext(CartContext);
 

  return (
<>
{carrito.length > 0 ? (carrito.map(({nombre, precio, cantidad, id})=>
  <>
  <div>
      <h4>{nombre}</h4>
      <h4>{precio}</h4>
      <h4>{cantidad}</h4>
      <h4>{}</h4>
      <Button onClick={()=>{quitarCarrito(id)}}>Remover</Button>
  </div>
  </>
  )): 
  <CarritoVacio/>
  }
  <div>
    <br />
    <h2>Cantidad Total {cantidadProductos()}</h2>
    <Button onClick={()=>{vaciarCarrito()}}>Vaciar Carrito</Button>
    {/* <p>Total: {precioProductos()}</p> */}
  </div>
  </>
  )
}