import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


export default function Cart() {
  const { carrito, quitarCarrito, agregarCarrito, enCarrito, precioTotal, cantidadTotal } = useContext(CartContext);

  return (
<>
{carrito.length > 0 ? (
  <div>
    <div>
      <div>
      <h3>Item</h3>
      <h3>Categoria</h3>
      <h3>Precio</h3>
      <h3>Cantidad</h3>
      </div>
    </div>
  </div>
): (
  <CarritoVacio/>
  )}
</>
  )
}
//hacer un coso de CarritoVacio 