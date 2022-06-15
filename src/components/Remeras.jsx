import React, { useState, useEffect } from 'react'
import {productos} from '../productos';
import { ItemList } from './ItemList';


export default function Remeras() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState([]);
    
    useEffect(() => {
      productos
      .then((result)=>{
        setItem(result.filter(item => item.categoria == "Remera"));
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
    <div><ItemList items={item}/></div>
    <div>{loading && "Loading.."}</div>
    <div>{error && "Hubo un error inesperado"}</div>
    </>
  )
}