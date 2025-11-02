document.addEventListener("DOMContentLoaded", () => {
  // --- Toggle Menu for Mobile ---
  const menu = document.querySelector(".menu");
  const navLinks = document.querySelector(".nav-links");

  menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // --- Search Functionality ---
  const searchBtn = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query === "") {
      alert("Please enter a product name to search!");
    } else {
      alert(`Searching for "${query}"...`);
      searchInput.value = "";
    }
  });

  // --- Contact Form Validation ---
  const form = document.querySelector(".contact-us form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !password || !message) {
        alert("Please fill in all fields before sending.");
        return;
      }

      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      form.reset();
    });
  }

  // --- Add to Cart Buttons ---
  const cartButtons = document.querySelectorAll(".product-card .btn");
  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.parentElement.querySelector("h3").textContent;
      alert(`${productName} has been added to your cart 🛒`);
    });
  });
});