const btnCart = document.querySelector(".contenedor-imagen") //Se llama la clase contenedor-imagen y se pasa a llama  btnCart//
const contenedorCarritoProductos = document.querySelector(".contenedor-carrito-productos") 
btnCart.addEventListener("click", () => { //Cada vez que se haga click en el carrito//
    contenedorCarritoProductos.classList.toggle("hidden-cart") //Va a abrir el contenedor cada vez que haga click
})
