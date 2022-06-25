import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CarritoVacio from './CarritoVacio';
import {Button, Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Cart() {
  const { carrito, quitarCarrito, agregarCarrito, enCarrito, precioTotal, cantidadTotal,vaciarCarrito } = useContext(CartContext);

  return (
<>
{carrito.length > 0 ? (
  <div>
    <div>
      <div>
      <Table striped bordered hover variant="dark" responsive>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th>Item</th>
      <th>Precio</th>
      <th>Cantidad</th>
    </tr>
  </thead>
  {carrito.map(({id, nombre, precio, cantidad, thumbnail, stock})=> {
    return(
  <tbody>
    <tr>
      <td>{thumbnail}</td>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{precio}</td>
      <td>{cantidad}</td>
      <input
					type='number'
					min={1}
					max={stock}
					defaultValue={cantidad}
					onChange={(e) => cantidadTotal(id, e.target.value)}
					/>
      {/* eliminar del carrito */}
      <Button onClickCapture={quitarCarrito()}><FontAwesomeIcon icon="fa-duotone fa-cart-circle-xmark" /></Button>
    </tr>
  </tbody>)   
  })}
  </Table>
      <Button >COMPRAR</Button>
      <Button onClick={vaciarCarrito()}>VACIAR CARRITO</Button>
      </div>
    </div>
  </div>
): 
  <CarritoVacio/>
  }
</>
  )
}