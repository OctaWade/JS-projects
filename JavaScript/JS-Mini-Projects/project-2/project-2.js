let openBtn = document.querySelector(".btn"); // Tek bir element seçmek için querySelector kullanın
let modalContainer = document.querySelector(".modal-container"); // Tek bir element seçmek için querySelector kullanın
let closeBtn = document.querySelector(".btn-2"); // Tek bir element seçmek için querySelector kullanın

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
