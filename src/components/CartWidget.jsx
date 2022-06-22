import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {

  const {cantidadProductos} = useContext(CartContext)
  
  return (<>
      <a href="#" className="btnSuccess" style={{color:'white'}}>
      <FontAwesomeIcon icon={faCartShopping} />
      {cantidadProductos()}
      </a>
      </>)
}

export default CartWidget

