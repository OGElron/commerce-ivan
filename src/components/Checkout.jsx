import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {addDoc, collection, getFirestore} from 'firebase/firestore'

export default function Checkout() {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [cel, setCel] = useState();

    const db = getFirestore();
    const orderCollection = collection (db, 'orders');

    const {carrito, preciosProductos} = useContext(CartContext);


    function handleClick() {
        const order = {
            usuario: {nombre, email, cel},
            items: carrito,
            total: preciosProductos
        }


    addDoc(orderCollection, order).then(({id})=>{
        console.log(id)
    });
    }
    
  

  return (
   <>
   <div style={{width: "50%"}}>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control onChange={(e)=> setNombre(e.target.value)} type="name" placeholder="Ingrese su nombre" />
        </Form.Group>

        <Form.Group onChange={(e)=> setEmail(e.target.value)} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        
        <Form.Group onChange={(e)=> setCel(e.target.value)} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="phone" placeholder="Ingrese su telefono" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
                <Link className= 'link' to='../'>TERMINAR COMPRA</Link>
            </Button>
        </Form>
    </div>
    <div>
        
    </div>
   </>
  )
}

