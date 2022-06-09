import React from 'react'
import {Item} from './Item'


export const ItemList = ({resultado}) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {resultado?.map(resultado=><Item name={resultado.name} 
      categoria={resultado.categoria} 
      precio={resultado.precio}
      stock={resultado.stock} 
      thumbnail={resultado.thumbnail}
      key={resultado.id}/>)}
    </div>
  )
}

