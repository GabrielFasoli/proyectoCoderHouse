
//producto 1 
let img = "imagenes/zapatillas/nike-metcon8-hombre-azul.jpg"
const nombre = document.querySelector('#nombre').innerText
//producto 2
let img2 = "imagenes/hombre/reebok-camiseta-verde2.jpg"
const nombre2 = document.querySelector('#nombre2').innerText
// producto 3
let img3 = "imagenes/mujer/nike-sujetador-deportivo-dri-fit-indy-sujecion-ligera-padded-graphic.jpg"
const nombre3 = document.querySelector('#nombre3').innerText
//producto 4
let img4 = "imagenes/zapatillas/nanoX3AB.jpg"
const nombre4 = document.querySelector('#nombre4').innerText


class Producto{
    constructor(id,nombre,precio,img,cantidad){
        this.id= id
        this.nombre=nombre
        this.precio= parseInt(precio)
        this.img=img
        this.cantidad= parseInt(cantidad)
        
    }
}

const productos = []

productos.push(new Producto(1,nombre,44999,img, 1))
productos.push(new Producto(2,nombre2,18500,img2, 1))
productos.push(new Producto(3,nombre3,20999,img3, 1))
productos.push(new Producto(4,nombre4,56200,img4, 1))

console.log(productos)

const equipamiento = document.getElementById('equipamiento').href
const index = document.getElementById('index').href
console.log()



if(index !== equipamiento){
    img="../imagenes/zapatillas/nike-metcon8-hombre-azul.jpg"
}




