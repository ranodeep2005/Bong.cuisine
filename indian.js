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

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('cart-total');
  cartItemsContainer.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = total.toFixed(2);
}
/// Fade-In effect for sections
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".cuisine-section");
  sections.forEach(function (section, index) {
    setTimeout(function () {
      section.style.opacity = 1;
    }, index * 500); // Staggered fade-in
  });
});

// Shopping cart logic
let art = [];

// Add item to cart
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCartDisplay();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('cart-total');

  // Clear the cart display
  cartItemsContainer.innerHTML = '';

  let total = 0;

  // Create new list items
  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - ₹${item.price.toFixed(2)}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(li);
  });

  // Update total price
  totalDisplay.textContent = `₹${total.toFixed(2)}`;
}
