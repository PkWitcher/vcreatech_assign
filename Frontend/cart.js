document.addEventListener("DOMContentLoaded", () => {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCartButton = document.getElementById("clear-cart");
    const emptyCartMessage = document.getElementById("empty-cart-message");

    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsList.innerHTML = "";
        emptyCartMessage.style.display = cart.length === 0 ? "block" : "none";

        let total = 0;
        cart.forEach((item, index) => {
            let cartItem = document.createElement("div");
            cartItem.classList.add("cart-items");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <p><strong>${item.name}</strong></p>
                    <p>${item.price} (x${item.quantity})</p>
                </div>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsList.appendChild(cartItem);
            total += parseFloat(item.price.replace("₹", "")) * item.quantity;
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    window.removeFromCart = (index) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };

    clearCartButton.addEventListener("click", () => {
        localStorage.removeItem("cart");
        loadCart();
    });

    window.checkout = () => {
        if (JSON.parse(localStorage.getItem("cart"))?.length > 0) {
            alert("Proceeding to Checkout!");
            localStorage.removeItem("cart");
            loadCart();
        } else {
            alert("Your cart is empty!");
        }
    };

    loadCart();
});
