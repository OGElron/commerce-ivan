
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Botones from './components/Botones';
import CarritoVacio from './components/CarritoVacio';
import Cart from './components/Cart';
import Contacto from './components/Contacto';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Nosotros from './components/Nosotros';
import Producto from './components/Producto';
import CartContext from "./context/CartContext";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcsD1HCYKjBu6XVu5V16ZH6KbcZdvdc9E",
  authDomain: "e-commerce-niello-ivan.firebaseapp.com",
  projectId: "e-commerce-niello-ivan",
  storageBucket: "e-commerce-niello-ivan.appspot.com",
  messagingSenderId: "490547329719",
  appId: "1:490547329719:web:4ff75a6ef1501c0a7ceb32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




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
        <Route path='/CarritoVacio' element={<CarritoVacio/>}/>
      </Routes>
  </CartContext>
</BrowserRouter>
 );
}

export default App;
