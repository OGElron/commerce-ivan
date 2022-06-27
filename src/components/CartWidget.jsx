import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {cantidadProductos} = useContext(CartContext)
  
  return (<>
      <Link to='./Cart'>
      <FontAwesomeIcon icon={faCartShopping} style={{color: 'white'}} />
      <p style={{color: 'white'}}>{cantidadProductos()}</p>
      </Link>
      </>)
}

export default CartWidget

