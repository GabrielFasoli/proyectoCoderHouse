
botonCarrito.onclick=()=>{
    agregarCarrito()
}


const eliminarProducto = () =>{
    const filtrado = carritoStorage.find((el)=>el.id)

    carritoStorage = carritoStorage.filter((el)=>{
        return el !== filtrado
    })
    agregarCarrito()
}