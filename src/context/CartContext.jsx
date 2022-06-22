import React from 'react'
import { useEffect } from 'react';
import { productos } from '../productos';

export default function CartContext({children}) {
    const [carrito, setCarrito] = useState(JSON.parseInt(localStorage.getItem('carrito'))||[]);
    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    //agregar al Carrito
const agregarCarrito = (prodID) => {
    const itemz = tiendita.find((productos) => productos.id === prodID);
    if (carrito.includes(itemz)) {
        swal({
            title: "Atencion",
            text: "Este item ya fue ingresado. Si quiere más de uno continue, sino recuerde elminarlo del carrito haciendo click en el boton adyacente",
            icon: "warning",
            button: "Entendido"
            })
    }
    carrito.push(itemz);
    inCarrito();
}
//quitar del Carrito
const quitarCarrito = (prodID) => {
    const itemz = carrito.find ((productos)=> productos.id === prodID)
    const indice = carrito.indexOf(itemz);
    carrito.splice(indice, 1);
    inCarrito();
}
 
//imprimir/ ver el carrito
const inCarrito = () => {
    addCarrito.innerHTML= ""
    carrito.forEach((productos) => {
        const div = document.createElement('div')
        div.className = "produComprado"
        div.innerHTML = `
            <p class="prodNom" >${productos.item}</p>
            <p class="prodPrec">${productos.precio}</p>
            <button onclick= "quitarCarrito(${productos.id})" class="btn-dngr"> x </button>
            `
    addCarrito.appendChild(div);       
    }) 
//numero en icono Carrito
   numCar.innerText = carrito.length
//precio Total 
   precioTotal.innerText = carrito.reduce ((acc,prod)=> acc + prod.precio, 0);
//pagar (acá iriamos a la info de la tarjeta)
    pagar.addEventListener("click", ()=>{
        swal({
    title: "Gracias por tu compra!",
    text: "Su tarjeta ha sido clonada y se utilizará para fines maléficos",
    icon: "success",
    button: "Entendido"
    });
    carrito.length = 0
    inCarrito ();
})
}
  return (
    <CartContext.Provider value={{
        carrito,
        agregarCarrito,
        quitarCarrito,
        limpiarCarrito,
        numCar,

    }}>
  {children}
  </CartContext.Provider>
  )
}
