const allProductsCards = document.querySelector(".all-products-cards");
const searchProduct = document.querySelector(".search-product");
const countProducts = document.querySelector(".count-products");
const pagination = document.querySelector(".pagination");
function getAllProducts(el) {
  return `<div class="card">

    <img src=${el.images[1]} alt="" />

    <div class="card-price">
      <div class="cridit-card">
        <h2>${el.price} ₽</h2>
        <span>С картой</span>
      </div>
      <div class="cash-card">
        <h2>50,50 ₽</h2>
        <span>Обычная</span>
      </div>
    </div>

    <h2>${el.name}</h2>

    <p>${el.description.slice(0, 35)}...</p>
    <div class="cards-star">
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
    </div>

    <button class="add-button">В корзину</button>
  </div>`;
}
let search = "";
products.map((el) => {
  allProductsCards.innerHTML += getAllProducts(el);
});
function getProducts() {
  let results = products.filter((el) => el.name.toLowerCase().includes(search));

  allProductsCards.innerHTML = "";

  results.map((el) => {
    allProductsCards.innerHTML += getAllProducts(el);
  });
  countProducts.textContent = results.length;
}
getProducts();

searchProduct.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});
