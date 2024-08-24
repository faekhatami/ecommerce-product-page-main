document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".close-button");
  const navigationMenu = document.querySelector(".navigation-menu");
  const cartButton = document.querySelector(".cart-button");
  const cartDropdown = document.querySelector(".cart-dropdown");
  const minusButton = document.getElementById("minus");
  const plusButton = document.getElementById("plus");
  const quantityDisplay = document.getElementById("quantity");
  const addToCartButton = document.querySelector(".add-to-cart");
  const cartCount = document.querySelector(".cart-count");
  const removeItemButton = document.querySelector(".remove-item-button");
  const thumbnails = document.querySelectorAll(".thumbnail-image");
  const productImage = document.querySelector(".product-image");
  const nextButton = document.querySelector(".next");
  const previousButton = document.querySelector(".previous");

  let quantity = 0;
  let currentImageIndex = 0;

  // Toggle Navigation Menu
  menuButton.addEventListener("click", function () {
    navigationMenu.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    navigationMenu.style.display = "none";
  });

  // Toggle Cart Dropdown
  cartButton.addEventListener("click", function () {
    cartDropdown.style.display =
      cartDropdown.style.display === "block" ? "none" : "block";
  });

  // Increase Quantity
  plusButton.addEventListener("click", function () {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  // Decrease Quantity
  minusButton.addEventListener("click", function () {
    if (quantity > 0) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  // Add to Cart
  addToCartButton.addEventListener("click", function () {
    cartCount.textContent = quantity;
  });

  // Remove Item from Cart
  removeItemButton.addEventListener("click", function () {
    quantity = 0;
    quantityDisplay.textContent = quantity;
    cartCount.textContent = quantity;
  });

  // Thumbnail Image Click
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      thumbnail.classList.add("active");
      productImage.src = `./images/image-product-${index + 1}.jpg`;
      currentImageIndex = index;
    });
  });

  // Next Image
  nextButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
    thumbnails[currentImageIndex].click();
  });

  // Previous Image
  previousButton.addEventListener("click", function () {
    currentImageIndex =
      (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
    thumbnails[currentImageIndex].click();
  });
});
