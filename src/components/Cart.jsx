import { Button } from 'bootstrap';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CarritoVacio from './CarritoVacio';
import { Button } from 'react-bootstrap';

export default function Cart(producto) {
  const { carrito, quitarCarrito, agregarCarrito, enCarrito, precioTotal, cantidadTotal,vaciarCarrito } = useContext(CartContext);

  return (
<>
{carrito.length > 0 ? (
  <div>
      <h2>Item</h2>
      <h2>Precio</h2>
      <h2>Cantidad</h2>
      <Button>boton</Button>
  </div>
      
      ): 
  <CarritoVacio/>
  }
  
  </>
  )
}