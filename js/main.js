const darkBtn = document.querySelector(".dark-btn");
const body = document.querySelector("body");

const modalOpenBtn = document.querySelector(".modal-open-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalBody = document.querySelector(".modal-body");
const modal = document.querySelector(".modal");
darkBtn.addEventListener("click", function () {
  if (body.classList.value !== "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});

function openModal() {
  modal.classList.add("modal-show");
  modalBody.classList.add("modal-body-show");
}

function modalClose() {
  modal.classList.remove("modal-show");
  modalBody.classList.remove("modal-body-show");
}

window.addEventListener("click", (e) => {
  if (e.target === modal || modalCloseBtn.contains(e.target)) {
    modalClose();
  }
});

modalOpenBtn.addEventListener("click", openModal);
