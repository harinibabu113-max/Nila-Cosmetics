let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(product + " added to cart!");
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");

    // Safety check
    if (!cartItems || !totalElement) {
        return;
    }

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <p>${index + 1}. ${item.product} - ₹${item.price}</p>
        `;
        total += item.price;
    });

    totalElement.innerText = "Total: ₹" + total;
}

