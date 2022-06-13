import React from 'react';
import { ListGroup,ListGroupItem, Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';

export const ItemDetail = ({producto})=> {

const {nombre, categoria, precio, stock, thumbnail} = producto;

const onAdd = (count) => {
  console.log(`sumaste ${count} productos`)
}

  return (
    <>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={thumbnail} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      DESCRIPCION DEL PRODUCTO
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{categoria}</ListGroupItem>
    <ListGroupItem>{precio}</ListGroupItem>
    <ListGroupItem>{stock}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Button>COMPRAR</Button>
  </Card.Body>
  <ItemCount onAdd={onAdd} inicial={1} max={10} />
</Card>
    </>
  )
}
