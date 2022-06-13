import React from 'react';
import {useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import ItemDetailContainer from './ItemDetailContainer';



export const Item = (props) => {
  const [montar, setMontar] = useState(false)
  
  return (
    <>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.thumbnail} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>{props.categoria} Aca va la descripción del item</Card.Text>
    <Button variant="primary" size="lg">{props.precio}</Button>
    <br/>
    <Button variant="primary">COMPRAR</Button>
    <Button variant="warning" onClick={()=>{setMontar(true)}}>Detalle</Button>
      {montar ? <ItemDetailContainer/> : ""}
  </Card.Body>
</Card>
    </>
  )
}
