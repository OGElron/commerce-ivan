import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  
  return (
    <>
  <Card className="tarjetas" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.thumbnail} />
  <Card.Body>
    <Card.Title>{props.nombre}</Card.Title>
    <Card.Text>{props.categoria}</Card.Text>
    <Card.Text>{props.descripcion}</Card.Text>
    <Card.Text>{props.precio}</Card.Text>
    <br/>
    <Button variant="primary"><Link variant="warning" to={'/producto/'+(props.id)} className='link'>Ver Producto</Link></Button>
  </Card.Body>
</Card>
    </>
  )
}
