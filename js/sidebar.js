document.addEventListener("DOMContentLoaded", function () {
  const categoryList = document.getElementById("categoryList");
  const productItems = document.querySelectorAll(".product-item");

  categoryList.addEventListener("click", function (event) {
    const selectedCategory = event.target.textContent.toLowerCase();
    showProducts(selectedCategory);
  });

  function showProducts(category) {
    // Hide all product items
    productItems.forEach((item) => item.classList.remove("active"));

    // Show the product items for the selected category
    const selectedProductItems = document.querySelectorAll(`.${category}`);
    selectedProductItems.forEach((item) => item.classList.add("active"));
  }
});
