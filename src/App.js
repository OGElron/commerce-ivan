import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';



function App() {
  const onAdd = (count) => {
    console.log(`sumaste ${count} productos`)
  }
  return (
<BrowserRouter>
      <NavBar />
      {/* <ItemListContainer greeting={"Hola"} user={""} catalogo={"Bienvenido"} /> */}
      <Routes>
        <Route  path='/' element={<ItemListContainer />}/>
        <Route  path='/home' element={<Home />}/>
        <Route  path='/contacto' element={<Contacto />}/>
        <Route  path='/nosotros' element={<Nosotros />}/>
      </Routes>
<ItemCount onAdd={onAdd} inicial={1} max={10} />
</BrowserRouter>
 );
}

export default App;
