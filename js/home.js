const discountCards = document.querySelector(".discount-wrapper-body");
const newProductsCards = document.querySelector(".new-products-wrapper-body");
const beforeProductsCards = document.querySelector(".before-wrapper-body");
const advertCard = document.querySelector(".advert-cards");
const articlesCards = document.querySelector(".articles-cards");

const advert = [
  {
    img: "../assets/images/home/special-card.png",
    title: "Оформите карту «Северяночка»",
    desc: "И получайте бонусы при покупке в магазинах и на сайте",
  },
  {
    img: "../assets/images/home/special-card2.png",
    title: "Оформите карту «Северяночка»",
    desc: "И получайте бонусы при покупке в магазинах и на сайте",
  },
];

const articles = [
  {
    id: 1,
    title: "Режим использования масок и перчаток на территории магазинов",
    description: ` Подробная информация о режимах использования масок и перчаток на
        территории магазинов "ЛЕНТА". Информация обновляется каждый будний
        день.`,
    image: "../assets/images/home/article1.png",
    date: "05.03.2021",
  },
  {
    id: 2,
    title: "Весеннее настроение для каждой  и праздничных тёплых пожеланий",
    description: ` 8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.`,
    image: "../assets/images/home/article2.png",

    date: "02.05.2023",
  },
  {
    id: 3,
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    description: `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!.`,
    image: "../assets/images/home/article3.png",
    date: "22.02.2020",
  },
];

function getProducts() {
  function getDiscountProduct({ name, id, description, images, price }) {
    let check = cart.find((el) => el.id === id);
    return `<div class="card">
                  <img src="${images[1]}" alt="" />
    
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
    
                  <h2>${name}</h2>
    
                  <p>${description.slice(0, 35)}...</p>
                  <div class="cards-star">
                    <i class="bx bx-star"></i>
                    <i class="bx bx-star"></i>
                    <i class="bx bx-star"></i>
                    <i class="bx bx-star"></i>
                    <i class="bx bx-star"></i>
                  </div>
    
                  <button  onClick = "addToCart(${id})" class="${
      check ? "added-button" : "add-button"
    }">В корзину</button>
                </div>`;
  }

  products.slice(0, 5).map((el) => {
    if (el.discount > 0) {
      discountCards.innerHTML += getDiscountProduct(el);
    }
  });

  function getNewProduct(el) {
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

  let newProduct = products.filter((el) => el.isNew).slice(0, 4);
  console.log(newProduct);

  newProduct.map((el) => {
    newProductsCards.innerHTML += getNewProduct(el);
    console.log(el);
  });

  function getBeforeProduct(el) {
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

  products.slice(0, 4).map((el) => {
    beforeProductsCards.innerHTML += getBeforeProduct(el);
  });
}

getProducts();

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

function getAdvert(el) {
  return `<div class= "advert-card">
  <div>
  <h3>${el.title}</h3>
  <p>${el.desc}</p>
  </div>

  <img src = ${el.img} alt= ${el.title}/>
  </div>`;
}

advert.map((el) => {
  advertCard.innerHTML += getAdvert(el);
});

function getArticles(el) {
  return `
  <div class = "article-card">
    <img src=${el.image} alt = ${el.title}/>
    <span>${el.date}</span>
    <h3>${el.title}</h3>
    <p>${el.description.slice(0, 120)}</p>

    <a href = "#">Подробнее</a>
  </div>
  `;
}

articles.map((el) => {
  articlesCards.innerHTML += getArticles(el);
});
