//creando boton para agregar productos y local storage

let botones = document.querySelectorAll('.btn')
const botonCarrito = document.getElementById('carritoDeCompra')
const carrito = []
for(const boton of botones){

    boton.onclick = (e) =>{

       
     let productoAgregado = productos.find((el)=> el.id === parseInt(e.target.id))
     carrito.push(productoAgregado)
     localStorage.setItem('buy',JSON.stringify(carrito))

     if(localStorage.length > 0){
     let storage = JSON.parse(localStorage.getItem('buy'))
     for(const el of storage){
        carritoStorage.push(new Producto(el.id,el.nombre,el.precio,el.img,el.cantidad))
     }  
}

    }
    
}
let carritoStorage=[]

 

//creando carrito

const contenedor = document.createElement('section')
contenedor.className='Cont-Carrito '

const agregarCarrito = ()=>{
    document.body.append(contenedor)
    contenedor.innerHTML=''
    contenedor.style.display='block'
    const header = document.createElement('div')
    header.className = 'modal-header'
    header.innerHTML = ` <h3 class="titulo-carrito">CARRITO</h3> `
    contenedor.append(header)

    const botonSalir = document.createElement('button')
    botonSalir.innerText = 'X'
    botonSalir.className= 'boton-header'
    header.append(botonSalir)

    botonSalir.onclick =()=>{
        contenedor.style.display='none'
    }
    
   carritoStorage.forEach((el)=>{
    let carritoCont = document.createElement('section')
    carritoCont.className= 'carrito-cont'
    carritoCont.innerHTML=` <div class='flex-div'> <img src="${el.img}" alt="">
                            <h3 class='nombre-producto'>${el.nombre}</h3>
                            <p class='precio'> $${el.precio} </p>
                            </div> `
   
    contenedor.append(carritoCont)
    
   /* 
    carritoStorage.filter((el)=>{
        let cantidad=document.createElement('div')
        cantidad.innerHTML=`  <p class='cantidad'>Cantidad:${el.cantidad}</p> `
        carritoCont.append(cantidad)
    })
*/
    let papelera= document.createElement('button')
    papelera.innerHTML= ` <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg> `
    papelera.className='borrar'
    carritoCont.append(papelera)

    papelera.onclick=()=>{
        eliminarProducto()
    }
    
                        
})

    const total = carritoStorage.reduce((acc,el)=> acc + el.precio,0)
    console.log(total)
    const PrecioTotal = document.createElement('div')
    PrecioTotal.innerHTML=`<h3 class='hs'>TOTAL=$ ${total}</h3>`
    contenedor.append(PrecioTotal) ;
   
 }  
  