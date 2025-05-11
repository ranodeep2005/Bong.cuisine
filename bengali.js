// Fade-In effect for sections
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".cuisine-section");
    sections.forEach(function (section, index) {
      setTimeout(function () {
        section.style.opacity = 1;
      }, index * 500); // Stagger the fade-in effect
    });
  });
  let cart = [];

function addToCart(dishName, price) {
  // Add dish to the cart array
  cart.push({ name: dishName, price: price });

  // Update the cart count and total price
  updateCart();
}

function updateCart() {
  // Display cart count and total price
  const cartCount = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  // Find or create cart elements to show count and total
  let cartInfo = document.getElementById("cart-info");
  if (!cartInfo) {
    cartInfo = document.createElement("div");
    cartInfo.id = "cart-info";
    document.body.appendChild(cartInfo);
  }

  cartInfo.innerHTML = `Cart: ${cartCount} item(s) | Total: $${totalPrice}`;
}
let art = [];

function addToCart(dishName, price) {
  // Add the dish to the cart array
  cart.push({ name: dishName, price: price });

  // Update the cart display
  updateCart();
}

function removeFromCart(index) {
  // Remove the item from the cart array
  cart.splice(index, 1);

  // Update the cart display
  updateCart();
}

function updateCart() {
  // Get the cart count and total price
  const cartCount = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  // Find the cart-info div and update it with new count and price
  const cartInfo = document.getElementById("cart-info");
  cartInfo.innerHTML = `Cart: ${cartCount} item(s) | Total: $${totalPrice}`;

  // Update the cart-items display
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // Clear the current cart items

  // Display the items in the cart
  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
                        <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(itemDiv);
  });
}
