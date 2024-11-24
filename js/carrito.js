let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    
    carrito.forEach(item => {
        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
        carritoDiv.appendChild(productoDiv);
    });

    document.getElementById('total').textContent = total.toFixed(2);
}