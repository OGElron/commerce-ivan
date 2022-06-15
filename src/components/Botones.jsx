import React from 'react'
import { ButtonGroup,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Gorras from './Gorras'
import Mousepad from './Mousepads'
import Remeras from './Remeras'
import Tazas from './Tazas'

export default function Botones() {


  return (
    <>
   <ButtonGroup size="lg" className="mb-2">
    <Button><Link to={<Remeras/>}>Remeras</Link></Button>
    <Button><Link to={<Gorras/>}>Gorras</Link></Button>
    <Button><Link to={<Tazas/>}>Tazas</Link></Button>
    <Button><Link to={<Mousepad/>}>Mousepads</Link></Button>
  </ButtonGroup>
    </>
  )
}
