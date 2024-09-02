let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let answer1 = document.querySelector(".answer-1");
let answer2 = document.querySelector(".answer-2");
let answer3 = document.querySelector(".answer-3");
let icon1 = document.querySelector(".icon-1");
let icon2 = document.querySelector(".icon-2");
let icon3 = document.querySelector(".icon-3");

btn1.addEventListener("click", function () {
  if (answer1.style.display === "none") {
    answer1.style.display = "block";

    icon1.name = "remove-outline";
  } else {
    answer1.style.display = "none";

    icon1.name = "add-outline";
  }
});
btn2.addEventListener("click", function () {
  if (answer2.style.display === "none") {
    answer2.style.display = "block";

    icon2.name = "remove-outline";
  } else {
    answer2.style.display = "none";

    icon2.name = "add-outline";
  }
});
btn3.addEventListener("click", function () {
  if (answer3.style.display === "none") {
    answer3.style.display = "block";

    icon3.name = "remove-outline";
  } else {
    answer3.style.display = "none";

    icon3.name = "add-outline";
  }
});
