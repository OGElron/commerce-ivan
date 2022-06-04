import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  const onAdd = (count) => {
    console.log(`sumaste ${count} productos`)
  }
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Hola"} user={""} catalogo={"Bienvenido"} />
      <ItemCount inicial={1} max={10} onAdd={onAdd}/>
 </>
 )
}

export default App;
