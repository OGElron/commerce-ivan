import React from 'react';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';


export default function CompraTer() {
  const [position, setPostion] = useState('top-end');
    
    return (
      <>
      <Toast bg='info'>
  <Toast.Header>
    <img src="https://imgur.com/ddxuavP.png" style= {{width:30, height:30}}className="rounded me-2" alt="" />
    <strong className="me-auto">Compra exitosa! </strong>
    <small>Athlos.ar</small>
  </Toast.Header>
  <Toast.Body>Chequee su correo para coordinar el envio</Toast.Body>
</Toast>
      </>
    )
  }
  