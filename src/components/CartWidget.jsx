import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {cantidadProductos} = useContext(CartContext)
  
  return (<>
      <Link to='./Cart'><a href="#" className="btnSuccess" style={{color:'white'}}>
      <FontAwesomeIcon icon={faCartShopping} />
      <p>{cantidadProductos()}</p>
      </a></Link>
      </>)
}

export default CartWidget

