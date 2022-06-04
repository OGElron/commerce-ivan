import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import Productos from './items.json'

function ItemListContainer({greeting, user, catalogo}) {
  const [products, ItemList] = useState([])

//   const task = new Promise((res, rej)=> {
//   setTimeout(()=>{
//     res(task);
//     rej("error");
//   }, 3000)
// })

  useEffect(() => {
    fetch(Productos)
      .then(res => res.json())
      .catch(error=>console.error("Error:", error))
      .then(res =>ItemList(Productos))
  }, [])
  
  console.log(products)
 
  return (
      <>
      <br />
    <div>{greeting + " " + user + " " + catalogo}
    <ItemList products/>
    </div>
    </>
  )
}


export default ItemListContainer