import React from 'react'
import {Item} from './Item'

export const ItemList = ({item}) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {item?.map(item=><Item name={item.name} 
      categoria={item.categoria} 
      precio={item.precio}
      stock={item.stock} 
      thumbnail={item.thumbnail}
      id={item.id}
      key={item.id}/>)}
    </div>
  )
}

