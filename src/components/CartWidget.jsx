import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

  const {cantidadProductos} = useContext(CartContext)
  
  return (<>
      <Link to='./Cart'>
      <FontAwesomeIcon icon={faCartShopping} style={{color: 'white'}} size="2x"/>
      <p style={{color: 'white'}} className='carritowid'>{cantidadProductos()}</p>
      </Link>
      </>)
}

export default CartWidget

