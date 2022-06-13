import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { productos } from "../productos";


export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);


  useEffect(() => {
    productos
    .then((result)=>{
      setItem(result);
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
  }, [])

  return (
    <>
      <div><ItemList item={item}/></div>
      <br />
      <div>{loading && "Loading.."}</div>
      <div>{error && "Hubo un error inesperado"}</div>
    </>
  );
}
