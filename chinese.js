// Fade-In effect for sections
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".cuisine-section");
    sections.forEach(function (section, index) {
      setTimeout(function () {
        section.style.opacity = 1;
      }, index * 500); // Stagger the fade-in effect
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".cuisine-section");
  sections.forEach(function (section, index) {
    setTimeout(function () {
      section.style.opacity = 1;
    }, index * 500); // Staggered fade-in
  });
});

// Initialize cart array and total
let cart = [];
let total = 0;

// Function to add items to the cart
function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

// Function to update the cart display
function updateCart() {
  // Get the cart list and total elements
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Clear the current cart items list
  cartItemsList.innerHTML = '';

  // Add each item to the cart list
  cart.forEach((cartItem, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
  });

  // Calculate and update the total
  total = cart.reduce((sum, cartItem) => sum + cartItem.price, 0);
  cartTotal.textContent = total.toFixed(2);
}
