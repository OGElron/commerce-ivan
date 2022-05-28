import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
function CartWidget() {
  return (<>
      <a href="#" className="btnSuccess" style={{color:'white'}}>
      <FontAwesomeIcon icon={faCartShopping} />0
      </a>
      </>)
}

export default CartWidget