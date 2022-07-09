import React from 'react';
import { useState, useContext } from 'react';
import { ListGroup,ListGroupItem, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

export const ItemDetail = ({producto})=> {

const {nombre, categoria, precio, stock, thumbnail,id, descripcion} = producto;
const [mostrar, setMostrar] = useState(false);

const {enCarrito, agregarCarrito} = useContext(CartContext)

const onAdd = (count) => {
  setMostrar(true)
  enCarrito(id)
  agregarCarrito(producto, count)
}

  return (
    <>
  <Card className="tarjetas2 ml-4" 
  style={{ width: '35rem' }} 
  bg='light' text='black' 
  border='dark' >

    <Card.Img variant="top" src={thumbnail} />
      <Card.Body className='bodytop'>
        <Card.Title className='detnombre'>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{categoria}</ListGroupItem>
        <ListGroupItem className='detprecio'>{precio}</ListGroupItem>
        <ListGroupItem>{stock}</ListGroupItem>
      </ListGroup>
      <Card.Body className='bodybot'>
        {mostrar ? <div>
        <Button><Link className='link' to={'../'}>Seguir comprando</Link></Button>
        <Button><Link className='link' to={'../cart'}>Carrito</Link></Button></div>:
        <ItemCount onAdd={onAdd} inicial={1} max={stock} />}
    </Card.Body>
</Card>
    </>
  )
}
