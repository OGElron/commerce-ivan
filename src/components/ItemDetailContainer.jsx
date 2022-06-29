import React from 'react'
import { useState, useEffect } from 'react';
import {ItemDetail} from './ItemDetail';
import {useParams} from 'react-router-dom'
import { productos } from '../productos';



export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [producto, setProducto] = useState({});
    const coleccion = 'items';
    const db = getFirestore();
    const {id} = useParams();
    
    // useEffect(() => {
    //   productos
    //   .then((result)=>{
    //     setProducto(result.find(pepito => pepito.id == id));
    //     setLoading(false)
    //   })
    //   .catch(error=>{
    //     setError(true);
    //     setLoading(false)
    //     console.error("Error",error)
    //   })
    //   .finally(()=>{
    //     setLoading(false);
    //   })
    // }, [])
    useEffect(()=>{

      const db = getFirestore();
      const itemsCollection = collection(db, 'items', id);
    
      getDoc(itemsCollection)
        .then((items) => {
          setProducto({...items.data(), id: items.id})
          console.log(productos)
        })
        .catch(error => {
          setError(true);
          setLoading(false);
          console.error("error", error)
        })
        .finally(()=>{setLoading(false)})
    
    }, [id])


  return (
    <>
    <div>{producto && <ItemDetail producto={producto}/>}</div>
    <div>{loading && "Loading.."}</div>
    <div>{error && "Hubo un error inesperado"}</div>
    </>
  )
}
