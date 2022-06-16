import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { productos } from "../productos";
import { useParams } from "react-router-dom";


export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);
  const {categoria} = useParams();

  useEffect(() => {
    productos
    .then((res)=>{
      setItem(!categoria ? res : res.filter(pepito => pepito.categoria == categoria))
      setLoading(false)
    })
    .catch(error=>{
      setError(true);
      setLoading(false)
      console.error("Error",error)
    })
    .finally(()=>{
      setLoading(false);
    })
  }, [categoria])
  return (
    <>
      <div><ItemList items={item}/></div>
      <br />
      <div>{loading && "Loading.."}</div>
      <div>{error && "Hubo un error inesperado"}</div>
    </>
  );
}
