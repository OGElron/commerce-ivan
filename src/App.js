
import './App.css';
import NavBar from './components/NavBar';
import Botones from './components/Botones';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Producto from './components/Producto';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import CartContext from "./context/CartContext";





function App() {

  return (
<BrowserRouter>
  <CartContext>
      <NavBar />
      <Botones/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/producto/:id' element={<Producto />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
  </CartContext>
</BrowserRouter>
 );
}

export default App;
