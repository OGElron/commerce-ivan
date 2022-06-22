import React from 'react';
import { useState, useContext } from 'react';
import { ListGroup,ListGroupItem, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

export const ItemDetail = ({producto})=> {

const {nombre, categoria, precio, stock, thumbnail,id} = producto;
const [mostrar, setMostrar] = useState(false);

const {enCarrito, agregarCarrito} = useContext(CartContext)

const onAdd = (count) => {
  console.log(`sumaste ${count} productos`);
  setMostrar(true)
  enCarrito(id)
  agregarCarrito(producto, mostrar)
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
  
  {mostrar ? <div>
  <Button><Link className='link' to={'../'}>Seguir comprando</Link></Button>
  <Button><Link className='link' to={'../cart'}>Checkout</Link></Button></div>:
  <ItemCount onAdd={onAdd} inicial={1} max={stock} />}
  
</Card>
    </>
  )
}
