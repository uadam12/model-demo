const productsComponent = getProductsComponent();
const shop = document.getElementById("shop");
const cartOverlay = document.getElementById("cart-overlay");

shop.appendChild(productsComponent);

function openCart() {
    cartOverlay.style.display = "grid";
}

function closeCart(e) {
    if(e.target !== e.currentTarget) return;
    
    cartOverlay.style.display = "none";
}

cartOverlay.addEventListener("click", closeCart);