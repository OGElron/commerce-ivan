import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  
  return (
    <>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.thumbnail} />
  <Card.Body>
    <Card.Title>{props.nombre}</Card.Title>
    <Card.Text>{props.categoria} Aca va la descripción del item</Card.Text>
    <Card.Text>{props.precio}</Card.Text>
    <br/>
    <Button variant="primary">COMPRAR</Button>
    <br/>
    <Link variant="warning" to={'/producto/'+(props.id)}>Detalle</Link>
  </Card.Body>
</Card>
    </>
  )
}
