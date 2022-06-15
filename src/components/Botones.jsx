import React from 'react'
import { ButtonGroup,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Botones() {


  return (
    <>

   <ButtonGroup size="lg" className="mb-2">
    <h4>Categorias</h4>
    <Button><Link to="/categoria/Remeras">Remeras</Link></Button>
    <Button><Link to="/categoria/Gorras">Gorras</Link></Button>
    <Button><Link to="/categoria/Tazas">Tazas</Link></Button>
    <Button><Link to="/categoria/Mousepads">Mousepads</Link></Button>
  </ButtonGroup>
    </>
  )
}
