import React from 'react'

export default function TestEventos() {
  function handleClick(e, id) {
    console.log(e);
    alert('click en: ' + id)
  }
  
  
    return (
    <>
    <div onClick={(e)=>handleClick(e, 1)} style={{border: '1px solid blue'}}>PROD1</div>
    <p onClick={(e)=>handleClick(e, 2)} style={{border: '1px solid red'}}>PROD2</p>
    </>
  )
}

// con el ejemplo de arriba abriendo en la consola el synthetic event puedo ver que
// se ejecuta primero el "(e)=>" y despues la Fx y puedo ver cosas como por ejemplo 
// el target donde se clickeo
