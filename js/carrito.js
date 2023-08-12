

//creando carrito
// creamamos el contenedor que en este caso ser auna section para luego poder hacer append en el y asi agregarlos en el body
const contenedor = document.createElement('section')

contenedor.className='Cont-Carrito '
// esta funcion va directamente al boton de carrito 
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

/* ocultamos el contenedor al apretar el botron de salir y vease arriba que utilizamos el display block para que vuelva a 
aprecer cuando apretamos el carrito nuevamente*/

    botonSalir.onclick =()=>{
        contenedor.style.display='none'
        if(carrito.length===0){
            cantidadCarrito.style.display='none'
        }
    }
    
/* recorremos el carrito con el metodo for each y creamos las cards con sus clases agragandolo al contenedor*/
   carrito.forEach((el)=>{
    let carritoCont = document.createElement('section')
    carritoCont.className= 'carrito-cont'
    carritoCont.innerHTML=` <div class='flex-div'> <img src="${el.img}" alt="">
                            <h3 class='nombre-producto'>${el.nombre}</h3>
                            <p class='precio'> $${el.precio} </p>
                                                        </div> `
   
    contenedor.append(carritoCont)
    
    
    const cantidad = document.createElement('div')
    cantidad.className='cont-cantidad'
    cantidad.innerHTML=` <p class='cantidad'> <button  class='restar-cantidad'> - </button> cantidad: ${el.cantidad} <button class='sumar-cantidad'> + </button> </p>
    <p class='total'> total: ${el.precio*el.cantidad} </p>`
    carritoCont.append(cantidad)
    
   

//agregamos la papelera para eliminar y lo introducimos al carritoCont al lado de los productos 

    let papelera= document.createElement('button')
    papelera.innerHTML= ` <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg> `
    papelera.className='borrar'
    carritoCont.append(papelera)

//eliminar producto 
    let eliminar = carritoCont.querySelector('.borrar')
   eliminar.onclick=()=>{
        eliminarProducto(el.id)
        
    }
    let sumar =  cantidad.querySelector('.sumar-cantidad')
   sumar.onclick=() => {
    el.cantidad ++
   agregarCarrito()
   saveLocal()
   }
   
 let restar =  cantidad.querySelector('.restar-cantidad')
   restar.onclick=() => {
    if(el.cantidad !==1){
        el.cantidad --
    }
    saveLocal()
    agregarCarrito()
   }
   
                        
})
//calcular el precio total 
    const total = carrito.reduce((acc,el)=> acc + (el.precio * el.cantidad),0)
    console.log(total)
    const PrecioTotal = document.createElement('div')
    PrecioTotal.innerHTML=`<h3 class='hs'>TOTAL=$ ${total}</h3>`
    contenedor.append(PrecioTotal) ;
   
 }  





botonCarrito.onclick=()=>{
   
    agregarCarrito()
}


const eliminarProducto = (id) =>{
    const filtrado = carrito.find((el)=>el.id===id)
    console.log(filtrado)
    carrito = carrito.filter((el)=>{
        return el !== filtrado
    })
    contador()
    agregarCarrito()
    saveLocal()
    
}
/*en esta funcion lo que se esta haciendo es: primero capturar en una constante el valor del id del producto seleccionado cuando el usuario pulsa
 el boton de eliminar, una vez obtenido el id de ese producto mediante el metodo filter lo que hacemos es retonar todos los productos de array menos
 el que tenga el id que obtuvimos anteriormente y por ultimo llamar a la funcuion agregaralcarrito() para que nos vuelva a colocar los prdocutos que 
 no se eliminaron
 */
const contador = ()=>{
     cantidadCarrito.style.display='block'
     carritoLength= carrito.length  
    localStorage.setItem('carritoLength', JSON.stringify(carritoLength))
    cantidadCarrito.innerText=JSON.parse(localStorage.getItem('carritoLength'));

}
contador()