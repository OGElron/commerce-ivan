import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'

function Item({product}) {
    const {item, thumbnail, categoria, precio} = product
  return (
    <>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={thumbnail} />
  <Card.Body>
    <Card.Title>{item}</Card.Title>
    <Card.Text>{categoria} Aca va la descripción del item</Card.Text>
    <Button variant="primary" size="md">{precio}</Button>
    <Button variant="primary">COMPRAR</Button>
  </Card.Body>
</Card>
    </>
  )
}

export default Item