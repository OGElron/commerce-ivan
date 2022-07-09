import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Form, Button, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import swal from "sweetalert";

export default function Checkout() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "orders");
  const { carrito, preciosProductos, vaciarCarrito } = useContext(CartContext);
  let total = preciosProductos;

  function handleClick() {
    const order = {
      usuario: { nombre, email, cel },
      items: carrito,
      total,
    };

    addDoc(orderCollection, order).then(({ id }) => {
      console.log(id);
    });
    vaciarCarrito();
  }
  function compraTer() {
    return (
      <Toast bg="info">
        <Toast.Header>
          <img
            src="https://imgur.com/ddxuavP.png"
            style={{ width: 30, height: 30 }}
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Compra exitosa! </strong>
          <small>Athlos.ar</small>
        </Toast.Header>
        <Toast.Body>Chequee su correo para ver los detalles y coordinar el envio</Toast.Body>
      </Toast>
    );
  }

  return (
    <>
      <div style={{ width: "50%" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              onChange={(e) => setNombre(e.target.value)}
              type="name"
              placeholder="Ingrese su nombre"
            />
          </Form.Group>

          <Form.Group
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />
          </Form.Group>

          <Form.Group
            onChange={(e) => setCel(e.target.value)}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="phone" placeholder="Ingrese su telefono" />
          </Form.Group>

          <Button variant="primary" type="submit">
            <Link
              className="link"
              to={{ pathname: "../", state: { showToast: true } }}
              onClick={() => {
                handleClick();
                compraTer();
              }}
            >
              TERMINAR COMPRA
            </Link>
          </Button>
        </Form>
      </div>
    </>
  );
}
