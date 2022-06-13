import shop1 from './img/shop1.jpg';
import shop2 from './img/shop2.jpg';
import shop3 from './img/shop3.jpg';
import shop4 from './img/shop4.jpg';
import shop5 from './img/shop5.jpg';
import shop6 from './img/shop6.jpg';
import shop7 from './img/shop7.jpg';
import shop8 from './img/shop8.jpg';
import shop9 from './img/shop9.jpg';
import shop10 from './img/shop10.jpg';

const items = [
    {nombre: "Remera Blanca Athlos", categoria: "Remera", precio:1300, stock:5,thumbnail: shop1,id: 1}, 
    {nombre: "Remera Negra Athlos",categoria: "Remera",precio:1300,stock: 12,thumbnail: shop2,id: 2},
    {nombre: "Remera Blanca Athlos II",categoria: "Remera",precio:1400,stock: 11,thumbnail: shop3,id: 3},
    {nombre: "Remera Negra Athlos II",categoria: "Remera",precio:1400,stock: 13,thumbnail: shop4,id: 4},
    {nombre: "Gorra Athlos Azul",categoria: "Gorra",precio:990,stock:8,thumbnail: shop5,id: 5},
    {nombre: "Gorra Athlos",categoria: "Gorra",precio:990,stock: 6,thumbnail: shop6,id: 6},
    {nombre: "Taza Athlos",categoria: "Taza",precio:650,stock: 20,thumbnail: shop7,id: 7},
    {nombre: "Taza Athlos II",categoria: "Taza",precio:650,stock:23,thumbnail: shop8,id: 8},
    {nombre: "Mousepad Athlos",categoria: "Mousepad",precio:750,stock:0,thumbnail: shop9,id: 9},
    {nombre: "Mousepad Athlos II",categoria: "Mousepad",precio:750,stock: 3,thumbnail: shop10,id: 10}
]

export const productos = new Promise((res, rej)=> {
    setTimeout(()=>{
        res(items);
        rej("no se puede cargar el producto");
    },2000)
})