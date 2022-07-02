import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";


export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);
  const {categoria} = useParams();

 
  useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    
    if (categoria) {

      const qcategoria = query(itemsCollection, where('categoria', '==', categoria))

      getDocs(qcategoria)
      .then(items => {
        setItem(items.docs.map((doc)=> ({...doc.data(), categoria: doc.categoria})));
      })
      .catch(error => {
        setError(true);
        setLoading(false); 
        console.error("error", error)
      })
      .finally(()=>{setLoading(false)})

  } else {
    
    getDocs(itemsCollection)
    .then(items => {
      setItem(items.docs.map((doc)=> ({...doc.data(), id: doc.id})));
    })
    .catch(error => {
      setError(true);
      setLoading(false);
      console.error("error", error)
    })
    .finally(()=>{setLoading(false)});

}
}, [categoria]);
  

   
  return (
    <>
      <div><ItemList items={item}/></div>
      <br />
      <div>{loading && "Loading.."}</div>
      <div>{error && "Hubo un error inesperado"}</div>
    </>
  )
  }

