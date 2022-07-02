import React from 'react'
import { ButtonGroup,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Categorias from './Categorias'

export default function Botones() {


  return (
    <>

   <ButtonGroup size="lg" className="mb-2">
    <Button><Link className='link' to="/">Categorias</Link></Button>
    <Categorias></Categorias>
  </ButtonGroup>
    </>
  )
}
