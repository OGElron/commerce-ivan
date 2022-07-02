import React from 'react'
import { ButtonGroup,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Botones() {


  return (
    <>

   <ButtonGroup size="lg" className="mb-2">
    <Button><Link className='link' to="/">Categorias</Link></Button>
    <Button><Link className='link' to="/categoria/Remeras">Remeras</Link></Button>
    <Button><Link className='link'to="/categoria/Gorras">Gorras</Link></Button>
    <Button><Link className='link'to="/categoria/Tazas">Tazas</Link></Button>
    <Button><Link className='link' to="/categoria/Mousepads">Mousepads</Link></Button>
  </ButtonGroup>
    </>
  )
}
