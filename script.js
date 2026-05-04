let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <p>
        ${item.name} - ₦${item.price}
        <button onclick="removeItem(${index})">X</button>
      </p>
    `;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cart-count").innerText = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

/* CART ANIMATION */
function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

/* SCROLL FADE-IN */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

/* CHECKOUT */
function checkout() {
  let message = "Hello, I want to order:%0A";

  cart.forEach(item => {
    message += `${item.name} - ₦${item.price}%0A`;
  });

  let total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `Total: ₦${total}`;

  window.open(`https://wa.me/2349168144059?text=${message}`);
}
