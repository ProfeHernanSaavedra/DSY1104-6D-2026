console.log("JavaScript esta funcionando desde app.js");

const titulo = document.getElementById("titulo-sitio");

console.log(titulo);

titulo.textContent ="Bienvenido a Cafe DUOC";

const botonBienvenida = document.getElementById("boton-bienvenida");
const mensajeBienvenida = document.getElementById("mensaje-bienvenida");


botonBienvenida.addEventListener("click",function(){
    //console.log("El usuario presionó el botón");
    mensajeBienvenida.textContent = "Bienvenido! Esperamos que disfrutes de nuestros productos";

    botonBienvenida.textContent = "Bienvenida mostrada"
});

const botonPromocion = document.getElementById("boton-promocion");
const promocion = document.getElementById("promocion");

botonPromocion.addEventListener("click",function(){
    //promocion.classList.remove("d-none");
    promocion.classList.toggle("d-none");
    if (promocion.classList.contains("d-none")) {
        botonPromocion.textContent = "Mostrar Promoción";
    } else {
        botonPromocion.textContent = "Ocultar Promoción";
        
    }

});

//agregar productos
const botonesAgregar = document.querySelectorAll(".boton-agregar");
const contador = document.getElementById("contador-productos");
const ultimoProducto = document.getElementById("ultimo-producto");
let cantidadProductos = 0;

//botonesAgregar.forEach(function(boton){
//    console.log(boton);
//});
botonesAgregar.forEach(function(boton){
    boton.addEventListener("click",function(){
        //console.log("Producto agregado");
        const nombreProducto = boton.dataset.producto;
        cantidadProductos++;
        contador.textContent = cantidadProductos;

        ultimoProducto.textContent = nombreProducto + " fue agregado correctamente";
    });
});








//console.log(botonesAgregar)




