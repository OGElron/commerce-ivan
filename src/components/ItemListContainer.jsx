import React, { useEffect, useState } from 'react'
import {ItemList} from './ItemList'

export default function ItemListContainer ({greeting, user, catalogo}) {
  
useEffect(() =>{
  const task = new Promise((res, rej)=> {

    setTimeout(() => {
      res('cumplida')
    }, 2000);
      
    });
    
    console.log(task)
  
  }, []);

 
return (
      <>
      <br />
    <div>{greeting + " " + user + " " + catalogo}
    <br />
    <ItemList products/>
    </div>
    </>
  )
}

