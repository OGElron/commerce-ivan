import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Producto from './components/Producto';



function App() {
  
  return (
<BrowserRouter>
      <NavBar />
      <Routes>
        <Route  path='/' element={<ItemListContainer />}/>
        <Route  path='/home' element={<Home />}/>
        <Route  path='/contacto' element={<Contacto />}/>
        <Route  path='/nosotros' element={<Nosotros />}/>
        <Route path='/producto' element={<Producto />} />
        <Route path='/producto/:id' element={<Producto />}/>
      </Routes>
</BrowserRouter>
 );
}

export default App;
