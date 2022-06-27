import React, { useState } from 'react'
import { Button} from 'react-bootstrap'
import CartContext from '../context/CartContext'


const ItemCount = ({inicial, max, onAdd}) => {
    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if (count < max) {
            setCount(count + 1)
    } else {alert("No se pueden agregar más productos")}
}
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert ("No se pueden quitar más productos")
    }
    const reset = () => {
        setCount(inicial)
    }


  return (
    <>
        <div className='mb-2'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant="success" size="sm" onClick={()=>{sumar(count)}}>+</Button>
            <h2>{count}</h2>
            <Button variant="danger" size="sm" onClick={()=>{restar(count)}}>-</Button>
            </div>
            <Button variant="primary" size="sm" onClick={()=> {onAdd(count); reset()}}>Agregar al Carrito</Button>
            <Button variant="primary" size="sm" onClick={reset}>Reset</Button>
        </div>
    </>
  )
}

export default ItemCount