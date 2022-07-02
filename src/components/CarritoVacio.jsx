import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


export default function CarritoVacio() {
  
  const mostrarAlerta= () => {     
    swal({
        title: "El carrito está vacío",
        text: "Vuelve a la tienda para comprar algo... o quedate fuera de onda, tu decisión",
        icon: "warning",
      }
    ) 
}
mostrarAlerta();

  return (
    <>
    <div>
        <h3>El carrito está vacío</h3></div>
    <Button><Link to='/' className='link'>REGRESAR A LA TIENDA</Link></Button>
    </>
  )
}
