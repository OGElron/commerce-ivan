import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'

const mostrarAlerta= () => {     
    swal({
        title: "El carrito está vacío",
        text: "Vuelve a la tienda para comprar algo... o quedate fuera de onda, tu decisión",
        icon: "warning",
      }
    )
}
mostrarAlerta();
export default function CarritoVacio() {
  return (
    <>
    <div>
        <h3>El carrito está vacío</h3></div>
    <Button><Link to='/' className='link'>REGRESAR A LA TIENDA</Link></Button>
    </>
  )
}
