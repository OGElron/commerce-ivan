import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import imagen1 from "../img/shop1.jpg";
import imagen2 from "../img/shop2.jpg";
import imagen3 from "../img/shop3.jpg";
import imagen4 from "../img/shop4.jpg";

const productos = [
    {name:"Gorra Blanca Athlos", descripcion: "Gorra - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since", precio: 1300, stock: 5, thumbnail: imagen1, id: 1},
    {name:"Gorra Negra Athlos", descripcion: "Gorra - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since", precio: 1300, stock: 12,  thumbnail: imagen2, id: 2},
    {name:"Gorra Blanca Athlos II", descripcion: "Gorra - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since", precio: 1400, stock: 13,  thumbnail: imagen3, id: 3},
    {name: "Gorra Negra Athlos III", descripcion: "Gorra - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since", precio: 400, stock: 10, thumbnail: imagen4, id: 4}
  ]


export default function ItemDetailContainer() {
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [detallin, setDetallin] = useState();
    
    useEffect(() => {
      setLoading(true);
      setError(false);
      setDetallin();
    
      const taskDetail = new Promise ((res, rej) => {
        setTimeout(()=> {
            res(productos)
            rej ("error");
            }, 2000);
      });
     
      taskDetail
        .then((result)=> {
            setDetallin(result);
            setLoading(false)
        })
        .catch((error)=> {
            setError(true);
            setLoading(false);
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [])
    



  return (
    <>
    <div><ItemDetail detallin={detallin}/></div>
    <div>{loading && "Loading.."}</div>
    <div>{error && "Hubo un error inesperado"}</div>
    </>
  )
}
