const categoryCards = document.querySelector(".category-cards");

function getCategory(el) {
  return `<div class="card">
    <img src=${el.image} alt="" />
    <a href="#">${el.name}</a>`;
}

categories.map((el) => (categoryCards.innerHTML += getCategory(el)));
