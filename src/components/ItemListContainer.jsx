import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

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
        res({
          mensaje: "usted compro ",
          name: "Remera Blanca Athlos",
          precio: 1300,
        });
        rej("hubo un error");
      }, 2000);
    });

    task
      .then((result) => {
        setResultado(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <br />
      <div>
        {greeting + " " + user + " " + catalogo}
        <br />
        <ItemList />
      </div>
      <br />
      <br />
      <div>{loading && "Loading.."}</div>
      <div>{error && "Hubo un error inesperado"}</div>
      <div>
        {resultado && (
          <>
            {resultado.mensaje}
            {resultado.name}
            {resultado.precio}
          </>
        )}
      </div>
    </>
  );
}
