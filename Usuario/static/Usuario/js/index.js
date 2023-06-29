// Carrito //
let cartIcon = document.querySelector('#menu-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');


// Abrir Carro //
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// Cerrar Carro //
closeCart.onclick = () => {
  cart.classList.remove("active");
};
