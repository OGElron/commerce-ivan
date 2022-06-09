import React from 'react'
import { useParams } from 'react-router-dom'

export default function TestProducts() {
  const {id} = useParams();
  
    return (
    <div>TestProducts</div>
  )
}
