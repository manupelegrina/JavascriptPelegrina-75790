const productos = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Mouse", precio: 20 },
    { id: 3, nombre: "Teclado", precio: 50 },
    { id: 4, nombre: "Monitor", precio: 150 }
];

let carrito = [];


function mostrarProductos() {
    console.log("Lista de productos disponibles:");
    productos.forEach(producto => {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
    });
}


function agregarAlCarrito() {
    let idProducto = prompt("Ingrese el ID del producto que desea comprar:");


    if (!idProducto || isNaN(idProducto) || idProducto.trim() === "") {
        alert("Ingrese un carácter válido.");
        return;
    }

    idProducto = parseInt(idProducto);
    let productoEncontrado = productos.find(prod => prod.id === idProducto);
    
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        alert(`${productoEncontrado.nombre} ha sido agregado al carrito.`);
    } else {
        alert("Producto no encontrado.");
    }
}


function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        return;
    }
    
    console.log("Productos en tu carrito:");
    let total = 0;
    carrito.forEach(prod => {
        console.log(`${prod.nombre} - $${prod.precio}`);
        total += prod.precio;
    });
    console.log(`Total: $${total}`);
}


mostrarProductos();
let continuar = true;
while (continuar) {
    agregarAlCarrito();
    continuar = confirm("¿Desea agregar otro producto?");
}
mostrarCarrito();