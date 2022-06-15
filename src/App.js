import './App.css';
import NavBar from './components/NavBar';
import Botones from './components/Botones';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Producto from './components/Producto';
import TestEventos from './components/TestEventos';
import Remeras from './components/Remeras';
import Gorras from './components/Gorras';
import Mousepads from './components/Mousepads';
import Tazas from './components/Tazas';




function App() {
  
  return (
<BrowserRouter>
      <NavBar />
      <Botones/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/producto' element={<Producto />} />
        <Route path='/producto/:id' element={<Producto />}/>
        <Route path='/TestEventos' element={<TestEventos />}/>
        <Route path='/categoria/Remeras' element={<Remeras />}/>
        <Route path='/categoria/Gorras' element={<Gorras />}/>
        <Route path='/categoria/Mousepads' element={<Mousepads />}/>
        <Route path='/categoria/Tazas' element={<Tazas />}/>
      </Routes>
</BrowserRouter>
 );
}

export default App;
