import React from 'react'
import { useState, useEffect } from 'react';
import {ItemDetail} from './ItemDetail';
import {productos} from '../productos';
import {useParams} from 'react-router-dom'


export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [producto, setProducto] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
      productos
      .then((result)=>{
        setProducto(result.find(pepito => pepito.id == id));
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
    <div>{producto && <ItemDetail producto={producto}/>}</div>
    <div>{loading && "Loading.."}</div>
    <div>{error && "Hubo un error inesperado"}</div>
    </>
  )
}
