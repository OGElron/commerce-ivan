//@ts-check
import React from 'react'
import {addDoc, doc, getDoc, getFirestore} from 'firebase/firestore';

export default function FBProducto() {
    const id = 'q9KHv8W6qXU9Fw6Ti8ww';
    const coleccion = 'items';
    const db = getFirestore();

    const remera1 = doc(db, coleccion, id);

    getDoc(remera1).then((res)=> {
       
       if(res.exists()) {console.log(res.id)
        console.log(res.data())
       } else {'no existo'}
    })
    return (
    <div>FB Producto</div>
  )
}
/*const db = getFirestore
function handleClick() {
  const order = {
    buyer: {nombre, email, cel},
    items: carrito,
    total,
  };

  }
}
addDoc (orderlocation, order)*/