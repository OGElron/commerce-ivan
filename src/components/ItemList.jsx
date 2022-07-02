import React from 'react'
import {Item} from './Item'

export const ItemList = ({items}) => {
  return (
    <div style={{display: 'flex', 
                flexWrap: 'wrap', 
                padding: '3rem',
                columnGap: '25px',
                rowGap: '20px'}}>
      {items?.map(item=>
        <Item 
        nombre={item.nombre} 
        categoria={item.categoria} 
        descripcion = {item.descripcion}
        precio={item.precio}
        stock={item.stock} 
        thumbnail={item.thumbnail}
        id={item.id}
        key={item.id}/>)}
    </div>
  )
}

