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
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, {
      threshold: 0.3,
    });
  
    sections.forEach(section => {
      observer.observe(section);
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
// Store cart items
let art = [];

// Add item to cart
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCartDisplay();
}

// Remove item by index
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Display the cart
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('cart-total');
  
  // Clear current list
  cartItemsContainer.innerHTML = '';
  let total = 0;

  // Rebuild list
  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(li);
  });

  // Update total
  totalDisplay.textContent = total.toFixed(2);
}
