import { createContext, useState } from 'react';


export const CartContext = createContext ({})

const {Provider} = CartContext

const MyProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
//Item Detail con some (true, false) chekeamos duplicado
const enCarrito = (id) => {
    return carrito.some(x => x.id === id)
}
//Item Detail agrega producto al carro y aumenta cantidad
const agregarCarrito = (producto, count) => {
    const nuevoItem = {
        ...producto,
        count
    }
    if(enCarrito(nuevoItem.id)) {
        const findProduct = carrito.find(x => x.id === nuevoItem.id)
        const productIndex = carrito.indexOf(findProduct)
        const auxArray = [...carrito]
        auxArray[productIndex].count += count
        setCarrito(auxArray)
    } else {
        setCarrito([...carrito, nuevoItem])
    }
}
//Cart - filter se encarga de quitar item con ID
const quitarCarrito= (id) => {
    return setCarrito(carrito.filter(x => x.id !== id))
}
//Cart - boton  vaciar el carrito 
const vaciarCarrito= () => {
    setCarrito([])
}
//Cart widget metodo reduce - es como el lenght - nos tira cant de unidades totales
const cantidadProductos= () => {
    return carrito.reduce((acc, x) => acc += x.count, 0)
}
// Cart reduce - retorna precio total del carrito
const precioProductos= () => {
    return carrito.reduce((acc, x) => acc += x.count * x.precio)
}
    
    return (
        <Provider value={{
        carrito,
        enCarrito,
        agregarCarrito,
        quitarCarrito,
        vaciarCarrito,
        cantidadProductos,
        precioProductos
    }}>
  {children}
  </Provider>
  )
}

export default MyProvider