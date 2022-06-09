import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import imagen1 from "../img/shop1.jpg";
import imagen2 from "../img/shop2.jpg";
import imagen3 from "../img/shop3.jpg";
import imagen4 from "../img/shop4.jpg";

const array = [
  {name:"Remera Blanca Athlos", categoria: "Remera", precio: 1300, stock: 5, thumbnail: imagen1, id: 1},
  {name:"Remera Negra Athlos", categoria: "Remera", precio: 1300, stock: 12,  thumbnail: imagen2, id: 2},
  {name:"Remera Blanca Athlos II", categoria: "Remera", precio: 1400, stock: 13,  thumbnail: imagen3, id: 3},
  {name: "Remera Negra Athlos III", categoria: "Remera", precio: 400, stock: 10, thumbnail: imagen4, id: 4}
]

export default function ItemListContainer({ greeting, user, catalogo }) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [resultado, setResultado] = useState();

  useEffect(() => {
    setLoading(true);
    setError(false);
    setResultado();

    const task = new Promise((res, rej) => {
      setTimeout(() => {
        res( array );
        rej("hubo un error");
      }, 2000);
    });

    task
      .then((result) => {
        setResultado(result);
        setLoading(false)
      })
      .catch((error) => {
        setError(true);
        console.log(error);
        setLoading(false)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(resultado)

  return (
    <>
      <br />
      <div>
        {greeting + " " + user + " " + catalogo}
        <br />
        <ItemList resultado={resultado}/>
      </div>
      <br />
      <br />
      <div>{loading && "Loading.."}</div>
      <div>{error && "Hubo un error inesperado"}</div>
    </>
  );
}
