import { getDocs, getFirestore, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Categorias() {
    
    const [categoria, setCategoria] = useState([]);

    useEffect(()=> {
        const db = getFirestore();

        const categoriesCollection = collection (db, 'categoria');

        getDocs(categoriesCollection)
            .then((snap)=> {
                setCategoria(snap.docs.map((doc)=>doc.data().name));
            });
    }, []);


  return (
    <>
        {categoria.map((el)=> (
            <Button className='botonera' key={el}>
                <Link className='link' to={'/categoria/' + el}>{el}</Link>
                </Button>
        ))}
    </>
  )
}
