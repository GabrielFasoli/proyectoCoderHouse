//creando boton para agregar productos y local storage

let botones = document.querySelectorAll('.btn')
const botonCarrito = document.getElementById('carritoDeCompra')
const cantidadCarrito= document.querySelector('#carrito-cantidad')
let carrito = JSON.parse(localStorage.getItem('carrito')) || []
/*agregar productos al carrito con  for recorriendo todos los botones con la clase btn, con el metodo find buscamos el id de los productos y si son 
iguales al id de los prdoctos lo agregamos al carrito
la manera de buscar el id de los botones es mediante el parametro e (event)  que tiene el target.id*/
for(const boton of botones){

    boton.onclick = (e) =>{
        Toastify({
            text: "Producto agregado al carrito",
            gravity: "bottom",
            position: "center",
            stopOnFocus: true,
            duration: 1500,
            style: {
                background: "#333636",
            },
        }).showToast();
    const repetir = carrito.some((el)=>el.id === parseInt(e.target.id))
    if(repetir){
        carrito.map((prod)=>{
            if(prod.id=== parseInt(e.target.id)){
                prod.cantidad++
            }
        })
    }
    else{
        filtro = productos.find((el)=> el.id === parseInt(e.target.id))
        carrito.push(filtro)
        contador()
        saveLocal()
       
        }
    }
}

const saveLocal = () =>{localStorage.setItem('carrito',JSON.stringify(carrito))} 



//COMENTARIOS
const contenedorComentarios = document.querySelector('#div-comentarios') 
const botonComentarios = document.querySelector('#comentarios')
let spinner= document.querySelector('#spinner')
botonComentarios.onclick=()=>{
    spinner.style.display='block'
   async function obtenerComentarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await respuesta.json();

        // Itera solo los primeros 5 comentarios
        setTimeout(()=>{
             for (i = 0; i < 5; i++) {
            const post = data[i];
            let contenedor = document.createElement('div');
            contenedor.innerHTML = `
            <h3 class='text-center'>${post.name}</h3>
            <p class='text-center'>${post.body}</p>
            `;
            contenedor.className = 'card card-body my-3 col-sm-12 col-md-6 col-lg-6 card-coment';
            contenedorComentarios.append(contenedor);
        }
        spinner.style.display='none'
        },1000)
       
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
    }
} obtenerComentarios();
}




 

 