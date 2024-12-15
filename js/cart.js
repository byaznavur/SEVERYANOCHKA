const productDetails = document.querySelector(".product-details");

function getDetailsCard({ images, name, price, quantity, discount, id }) {
  return `<div class="details-card">
         <div>
          <img src="${images[0]}" alt="" />

          <div>
            <h3>${name}</h3>
            <p>${price}$</p>
            <span>${discount}%</span>
          </div>
         </div>
         <div>
       <div>
         <button onClick = "decQuantity(${id})">-</button>
         <span>${quantity}</span>
         <button onClick = "incQuantity(${id})">+</button>
         </div>
         <div>
         <p>120$</p>
         </div>
         </div>
        </div>`;
}

function getProduct() {
  productDetails.innerHTML = "";
  cart.map((el) => {
    productDetails.innerHTML += getDetailsCard(el);
  });
}

getProduct();

function incQuantity(id) {
  cart.map((el) => {
    if (el.id === id) {
      el.quantity++;
    }
    return el;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  getProduct();
}

function decQuantity(id) {
  let product = cart.find((el) => el.id === id);

  if (product.quantity == 1) {
    let isDelete = confirm("Do you want to delete this product?");
    if (isDelete) {
      cart = cart.filter((el) => el.id !== id);
    }
  } else {
    cart.map((el) => {
      if (el.id === id) {
        el.quantity--;
      }
      return el;
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getProduct();
  getCount();
}
