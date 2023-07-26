let botones = document.querySelectorAll('.btn')
const botonCarrito = document.getElementById('carritoDeCompra')
const carrito = []
for(const boton of botones){
    boton.onclick = (e) =>{
     let productoAgregado = productos.find((el)=> el.id === parseInt(e.target.id))
     carrito.push(productoAgregado)
     localStorage.setItem('buy',JSON.stringify(carrito))
    }
}

 let carritoStorage=[]

if(localStorage != 0){
     carritoStorage = JSON.parse(localStorage.getItem('buy'))
    
    
}
console.log(carritoStorage)

const contenedor = document.getElementById('contenedorCarrito')

botonCarrito.addEventListener('click', () =>{
    const header = document.createElement('div')
    header.className = 'modal-header'
    header.innerHTML = ` <h3 class="titulo-carrito">CARRITO</h3> `
    contenedor.append(header)

    const botonSalir = document.createElement('button')
    botonSalir.innerText = 'X'
    botonSalir.className= 'boton-header'
    header.append(botonSalir)
    
   carritoStorage.forEach((el)=>{
    let carritoCont = document.createElement('div')
    carritoCont.className= 'carrito-cont'
    carritoCont.innerHTML=` <img src="${el.img}" alt="">
                            <h3>${el.nombre}</h3>
                            <p> $${el.precio} </p> `
   
    contenedor.append(carritoCont)
                        })

    const total = carritoStorage.reduce((acc,el)=> acc + el.precio,0)
    console.log(total)
    const PrecioTotal = document.createElement('div')
    PrecioTotal.innerHTML=`TOTAL=$ ${total}`
    contenedor.append(PrecioTotal)


  
    
   });

   