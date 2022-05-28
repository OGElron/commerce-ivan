import React from 'react'

function ItemListContainer({greeting, user, catalogo}) {
  return (
      <>
      <br />
    <div>{greeting + " " + user + " " + catalogo} <br />
    <h6>Este es nuestro catalogo</h6> <br />
        <ul>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</ul>
        <ul>Aliquam tincidunt mauris eu risus.</ul>
        <ul>Vestibulum auctor dapibus neque.</ul>
        <ul>Nunc dignissim risus id metus.</ul>
        <ul>Vivamus vestibulum ntulla nec ante.</ul>
    </div>
    </>
  )
}

export default ItemListContainer