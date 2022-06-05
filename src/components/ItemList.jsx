import React from 'react'
import {Item} from './Item'

export const ItemList = () => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Item name={"Remera Blanca Athlos"} categoria={"Remera"} precio={1300} stock={5} thumbnail={"../img/shop1.jpg"} id={1}/>
        <Item name={"Remera Negra Athlos"} categoria={"Remera"} precio={1300} stock={12} thumbnail={'../img/shop3.jpg'} id={2}/>
        <Item name={"Remera Blanca Athlos II"} categoria={"Remera"} precio={1400} stock={11} thumbnail={'../img/shop2.jpg'} id={3}/>
        <Item name={"Remera Negra Athlos III"} categoria={"Remera"} precio={1400} stock={13} thumbnail={'../img/shop4.jpg'} id={4}/>
    </div>
  )
}

