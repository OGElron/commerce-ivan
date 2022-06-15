import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Contacto() {
  return (
   <>
   <h3>Contacto</h3>
   <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Dirección de correo</Form.Label>
    <Form.Control type="email" placeholder="Email" />
    <Form.Text className="text-muted">
      Ingresa una dirección de correo para que te contactemos
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Comentario</Form.Label>
    <Form.Control type="text" placeholder="Comentario" /></Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
  <Button variant="primary" type="submit">
    Enviar
  </Button>
</Form>
   </>
  )
}
