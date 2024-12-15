const allProductsCards = document.querySelector(".all-products-cards");
const searchProduct = document.querySelector(".search-product");
const countProducts = document.querySelector(".count-products");
const pagination = document.querySelector(".pagination");
function getAllProducts({ images, price, id, name, description }) {
  let check = cart.find((el) => el.id === id);
  return `<div class="card">

    <img src="${images[0]}" alt="" />

    <div class="card-price">
      <div class="cridit-card">
        <h2>${price} ₽</h2>
        <span>С картой</span>
      </div>
      <div class="cash-card">
        <h2>50,50 ₽</h2>
        <span>Обычная</span>
      </div>
    </div>

    <h2>${id}.${name}</h2>

    <p>${description.slice(0, 35)}...</p>
    <div class="cards-star">
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
    </div>

    <button onClick = "addToCart(${id})" class="${
    check ? "added-button" : "add-button"
  }">В корзину</button>
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
      activePage === 1 ? "disabled" : ""
    }><i class='bx bx-chevron-left'></i></button>
    </li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li>
       <button class = "${
         i === activePage ? "active" : ""
       }"   onClick = "getPage(${i})">${i}</button>
       </li>`;
    }
    pagination.innerHTML += `<li>
     <button onClick = getPage("+") ${
       activePage === pages ? "disabled" : ""
     }><i class='bx bxs-chevron-right'></i></button>
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

function addToCart(id) {
  let product = products.find((el) => el.id === id);
  let check = cart.find((el) => el.id === id);
  if (check) {
    cart = cart.map((el) => {
      if (el.id === id) {
        el.quantity++;
      }
      return el;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
  getCount();
}
