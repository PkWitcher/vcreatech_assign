// Simple function to redirect to shop page when button is clicked
  // Toggle menu for mobile view
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Men's Jacket", price: "₹4000", category: "Men", image: "image/dress.jpg" },
        { name: "Women's Dress", price: "₹3200", category: "Women", image: "image/eleg.jpg" },
        { name: "Kids T-shirt", price: "₹1600", category: "Kids", image: "image/shirt.jpg" },
        { name: "Men's Shirt", price: "₹2800", category: "Men", image: "image/shirt.jpg" },
        { name: "Women's Jeans", price: "₹3600", category: "Women", image: "image/jeans.jpg" },
        { name: "Men's Trousers", price: "₹3000", category: "Men", image: "image/jeans.jpg" },
        { name: "Women's Top", price: "₹2000", category: "Women", image: "image/dress.jpg" },
        { name: "Kids Dress", price: "₹1800", category: "Kids", image: "image/eleg.jpg" },
        { name: "Men's Shoes", price: "₹5000", category: "Men", image: "image/dress.jpg" },
        { name: "Women's Sandals", price: "₹2500", category: "Women", image: "image/shirt.jpg" },
        { name: "Kids Shoes", price: "₹2000", category: "Kids", image: "image/jeans.jpg" },
        { name: "Men's Watch", price: "₹6000", category: "Men", image: "image/eleg.jpg" },
        { name: "Women's Handbag", price: "₹4000", category: "Women", image: "image/dress.jpg" },
        { name: "Kids Backpack", price: "₹1500", category: "Kids", image: "image/shirt.jpg" },
        { name: "Men's Belt", price: "₹1000", category: "Men", image: "image/jeans.jpg" },
        { name: "Women's Scarf", price: "₹800", category: "Women", image: "image/dress.jpg" },
        { name: "Kids Hat", price: "₹500", category: "Kids", image: "image/eleg.jpg" },
        { name: "Men's Sunglasses", price: "₹2000", category: "Men", image: "image/shirt.jpg" },
        { name: "Women's Jewelry", price: "₹3000", category: "Women", image: "image/jeans.jpg" },
        { name: "Kids Toys", price: "₹1200", category: "Kids", image: "image/dress.jpg" },
        { name: "Men's Wallet", price: "₹1500", category: "Men", image: "image/eleg.jpg" },
        { name: "Women's Makeup Kit", price: "₹2500", category: "Women", image: "image/shirt.jpg" },
        { name: "Kids Books", price: "₹800", category: "Kids", image: "image/jeans.jpg" },
        { name: "Men's Perfume", price: "₹3500", category: "Men", image: "image/dress.jpg" },
        { name: "Women's Perfume", price: "₹4000", category: "Women", image: "image/eleg.jpg" },
        { name: "Kids Games", price: "₹1000", category: "Kids", image: "image/shirt.jpg" },
        { name: "Men's Sports Shoes", price: "₹5500", category: "Men", image: "image/jeans.jpg" },
        { name: "Women's Heels", price: "₹3000", category: "Women", image: "image/dress.jpg" },
        { name: "Kids Sandals", price: "₹1500", category: "Kids", image: "image/eleg.jpg" },
        { name: "Men's Casual Shoes", price: "₹4000", category: "Men", image: "image/shirt.jpg" },
        { name: "Women's Flats", price: "₹2000", category: "Women", image: "image/jeans.jpg" },
        { name: "Kids Sneakers", price: "₹2000", category: "Kids", image: "image/dress.jpg" },
        { name: "Men's Formal Shoes", price: "₹6000", category: "Men", image: "image/eleg.jpg" },
        { name: "Women's Boots", price: "₹4500", category: "Women", image: "image/shirt.jpg" },
        { name: "Kids Boots", price: "₹2500", category: "Kids", image: "image/jeans.jpg" },
        { name: "Men's Loafers", price: "₹3500", category: "Men", image: "image/dress.jpg" },
        { name: "Women's Slippers", price: "₹1500", category: "Women", image: "image/eleg.jpg" },
        { name: "Kids Slippers", price: "₹1000", category: "Kids", image: "image/shirt.jpg" },
        { name: "Men's Flip-flops", price: "₹1000", category: "Men", image: "image/jeans.jpg" },
        { name: "Women's Flip-flops", price: "₹800", category: "Women", image: "image/dress.jpg" },
        { name: "Kids Flip-flops", price: "₹500", category: "Kids", image: "image/eleg.jpg" },
        { name: "Men's Socks", price: "₹500", category: "Men", image: "image/shirt.jpg" },
        { name: "Women's Socks", price: "₹400", category: "Women", image: "image/jeans.jpg" },
        { name: "Kids Socks", price: "₹300", category: "Kids", image: "image/dress.jpg" },
        { name: "Men's Underwear", price: "₹800", category: "Men", image: "image/eleg.jpg" },
        { name: "Women's Lingerie", price: "₹1500", category: "Women", image: "image/shirt.jpg" },
        { name: "Kids Underwear", price: "₹600", category: "Kids", image: "image/jeans.jpg" },
        { name: "Men's Swimwear", price: "₹2000", category: "Men", image: "image/dress.jpg" },
        { name: "Women's Swimwear", price: "₹2500", category: "Women", image: "image/eleg.jpg" },
        { name: "Kids Swimwear", price: "₹1200", category: "Kids", image: "image/shirt.jpg" },
        { name: "Men's Lounge Wear", price: "₹1800", category: "Men", image: "image/jeans.jpg" },
        { name: "Women's Lounge Wear", price: "₹2200", category: "Women", image: "image/dress.jpg" },
        { name: "Kids Lounge Wear", price: "₹1000", category: "Kids", image: "image/eleg.jpg" },
    ];

    const productContainer = document.getElementById("product-container");
    const searchInput = document.getElementById("search");
    const cartCount = document.getElementById("cart-count");

    // Initialize cart from localStorage or as empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render products
    function renderProducts(filter = "") {
        productContainer.innerHTML = "";
        products
            .filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
            .forEach((product, index) => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button onclick="addToCart(${index})">Add to Cart</button>
                `;
                productContainer.appendChild(productCard);
            });
    }

    // Function to add item to cart
    window.addToCart = function (index) {
        // Check if the item is already in the cart
        const existingProduct = cart.find(item => item.name === products[index].name);
        if (existingProduct) {
            existingProduct.quantity += 1; // Increment quantity if it already exists
        } else {
            // Add new product with quantity 1
            const productToAdd = { ...products[index], quantity: 1 };
            cart.push(productToAdd);
        }

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(`${products[index].name} added to cart!`);
    };

    // Function to update cart count in the navbar
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
    }

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        renderProducts(e.target.value);
    });

    // Initial render
    renderProducts();
    updateCartCount(); // Update cart count on page load
});

// contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");
    document.getElementById("contactForm").reset();
});

