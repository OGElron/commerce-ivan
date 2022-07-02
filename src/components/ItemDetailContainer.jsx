import React from 'react'
import { useState, useEffect } from 'react';
import {ItemDetail} from './ItemDetail';
import {useParams} from 'react-router-dom'
import { productos } from '../productos';
import {doc, getDoc, getFirestore} from 'firebase/firestore'



export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [producto, setProducto] = useState({});
    const colection = 'items';
    const db = getFirestore();
    const {id} = useParams();
  
    useEffect(()=>{

      const db = getFirestore();
      
      const itemRef = doc(db, 'items', id);

      getDoc(itemRef)
        .then((snap) => {
          setProducto({...snap.data(), id: snap.id})
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
