let addBtn = document.querySelector(".add-btn");
let enterText = document.querySelector(".enter-text");
let cartDesign = document.querySelector(".need-cart");
let container = document.querySelector(".cart-container");

let number = 1;
let temp = "need-cart-";
let tempTwo = "trash-btn-";
let tempThree = "checkmark-btn-";
let cartNumber = 0;

addBtn.addEventListener("click", function () {
  if (enterText.value === "") {
  } else {
    let newCartClass = temp + number.toString();
    let newTrashClass = tempTwo + number.toString();
    let newCheckmarkClass = tempThree + number.toString();

    let cartDesignClon = cartDesign.cloneNode(true);

    let newText = cartDesignClon.querySelector(".text");
    let newTrashBtn = cartDesignClon.querySelector(".trash-btn");
    let newCheckmarkBtn = cartDesignClon.querySelector(".checkmark-btn");

    newText.textContent = enterText.value;
    newTrashBtn.classList.add(newTrashClass);
    newCheckmarkBtn.classList.add(newCheckmarkClass);

    container.appendChild(cartDesignClon);

    cartDesignClon.classList.add(newCartClass);

    enterText.value = null;

    number++;
    cartNumber++;
  }

  let trashBtnAll = document.querySelectorAll(".trash-btn");

  for (let i = 0; i < trashBtnAll.length; i++) {
    trashBtnAll[i].addEventListener("click", function (e) {
      let tempFour = "trash-btn-";
      let clickedBtnClass;
      let clickedCartClass;

      for (let j = 1; j <= cartNumber; j++) {
        clickedBtnClass = tempFour + j.toString();
        if (e.target.classList.contains(clickedBtnClass)) {
          clickedCartClass = temp + j.toString();

          let elementToRemove = document.querySelector("." + clickedCartClass);
          container.removeChild(elementToRemove);
        } else {
          continue;
        }
      }
    });
  }

  let CheckmarkBtnAll = document.querySelectorAll(".checkmark-btn");

  for (let k = 0; k < CheckmarkBtnAll.length; k++) {
    CheckmarkBtnAll[k].addEventListener("click", function (e) {
      let tempFive = "checkmark-btn-";
      let clickedBtnClass2;
      let clickedCartClass2;

      for (let l = 1; l <= cartNumber; l++) {
        clickedBtnClass2 = tempFive + l.toString();

        if (e.target.classList.contains(clickedBtnClass2)) {
          clickedCartClass2 = temp + l.toString();
          let selecterCartClass = "." + clickedCartClass2;

          let parentElement = document.querySelector(selecterCartClass);
          let pElement = parentElement.querySelector(".text");

          pElement.style.textDecoration = "line-through";
        }
      }
    });
  }
});

// trashBtnAll = document.querySelectorAll(".trash-btn");

// trashBtnAll.addEventListener("click", function (e) {
//   let tempFour = "trash-btn-";

//   for (let i = 1; i <= cartNumber; i++) {
//     if (e.target === tempFour + i.toString()) {
//       clickedBtnClass = tempFour + i.toString();

//       console.log(clickedBtnClass);

//       container.removeChild();
//     }
//   }
// });
