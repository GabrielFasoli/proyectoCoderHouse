//producto 1 
const img = "imagenes/zapatillas/nike-metcon8-hombre-azul.jpg"
const nombre = document.querySelector('#nombre').innerText
//producto 2
const img2 = "imagenes/hombre/reebok-camiseta-verde2.jpg"
const nombre2 = document.querySelector('#nombre2').innerText
console.log(precio2)
// producto 3
const img3 = "imagenes/mujer/nike-sujetador-deportivo-dri-fit-indy-sujecion-ligera-padded-graphic.jpg"
const nombre3 = document.querySelector('#nombre3').innerText
//producto 4
const img4 = "imagenes/zapatillas/nanoX3AB.jpg"
const nombre4 = document.querySelector('#nombre4').innerText


class Producto{
    constructor(id,nombre,precio,img){
        this.id= id
        this.nombre=nombre
        this.precio= parseInt(precio)
        this.img=img
        
    }
}

const productos = []

productos.push(new Producto(1,nombre,44999,img))
productos.push(new Producto(2,nombre2,18500,img2))
productos.push(new Producto(3,nombre3,20999,img3))
productos.push(new Producto(4,nombre4,56200,img4))

console.log(productos)




