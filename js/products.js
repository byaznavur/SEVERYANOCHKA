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
let activePage = 1;
products.map((el) => {
  allProductsCards.innerHTML += getAllProducts(el);
});
function getProducts() {
  let results = products.filter((el) => el.name.toLowerCase().includes(search));

  let pages = Math.ceil(results.length / 10);

  if (pages > 1) {
    pagination.innerHTML = `<li>
    <button onClick =getPage("-") ${
      activePage == 1 ? "disabled" : ""
    }>Previus</button>
    </li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li class = "${
        i === activePage ? "active" : ""
      }" >
       <button  onClick = "getPage(${i})">${i}</button>
       </li>`;
    }
    pagination.innerHTML += `<li>
     <button onClick = getPage("+") ${
       activePage == pages ? "disabled" : ""
     }>Next</button>
     </li>`;
  } else {
    pagination.innerHTML = "";
  }
  let startIndex = (activePage - 1) * 10;
  let endIndex = activePage * 10;
  let pageResults = results.slice(startIndex, endIndex);

  allProductsCards.innerHTML = "";

  pageResults.map((el) => {
    allProductsCards.innerHTML += getAllProducts(el);
  });
  countProducts.textContent = results.length;
}
getProducts();

searchProduct.addEventListener("keyup", function () {
  activePage = 1;
  search = this.value.trim().toLowerCase();
  getProducts();
});

function getPage(page) {
  if (page == "+") {
    activePage++;
  } else if (page == "-") {
    activePage--;
  } else {
    activePage = page;
  }
  getProducts();
  console.log(page);
}
