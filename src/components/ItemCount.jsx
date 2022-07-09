import React, { useState } from 'react'
import { Button} from 'react-bootstrap'

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
        <div className='contador'>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button style={{borderRadius: 30}} variant="success" size="sm" onClick={()=>{sumar(count)}}>+</Button>
            <h2>{count}</h2>
            <Button style={{borderRadius: 30}} variant="danger" size="sm" onClick={()=>{restar(count)}}>-</Button>
            </div>
            <br></br>
            <Button style={{marginInline: 20}} variant="primary" size="sm" onClick={()=> {onAdd(count); reset()}}>Agregar al Carrito</Button>
            <Button variant="primary" size="sm" onClick={reset}>Reset</Button>
        </div>
    </>
  )
}

export default ItemCount