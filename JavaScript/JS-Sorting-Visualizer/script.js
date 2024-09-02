// Buttons
let newArrayBtn = document.querySelector(".new-array-btn");
let bubbleBtn = document.querySelector(".bubble-btn");
let selectionBtn = document.querySelector(".selection-btn");
let insertionBtn = document.querySelector(".insertion-btn");
let quickBtn = document.querySelector(".quick-btn");
let mergeBtn = document.querySelector(".merge-btn");

// Sliders
const numberSlider = document.querySelector(".number-of-bar-slider");
const speedSlider = document.querySelector(".speed-of-sorting-slider");

// Selecting visualizer div
let visualizerDiv = document.querySelector(".visualizer-div");

// getting slider values

let speed;
let numberOfBars = 50;
let widthOfBars;
let heightOfBars;

numberSlider.addEventListener("input", function (event) {
  numberOfBars = event.target.value;

  generateBars();

  bubbleBtn.disabled = false;
  selectionBtn.disabled = false;
});

speedSlider.addEventListener("input", (event) => {
  speed = 100 - event.target.value;
});

// New Array Button

newArrayBtn.addEventListener("click", function () {
  generateBars();

  bubbleBtn.disabled = false;
  selectionBtn.disabled = false;
});

// Generating Bars

function generateBars() {
  while (visualizerDiv.firstChild) {
    visualizerDiv.removeChild(visualizerDiv.firstChild);
  }

  widthOfBars = Math.floor(700 / numberOfBars);

  for (let i = 0; i < numberOfBars; i++) {
    heightOfBars = Math.floor(Math.random() * (400 - 20 + 1)) + 20;

    let newBar = document.createElement("div");
    newBar.style.height = heightOfBars + "px";
    newBar.style.width = widthOfBars + "px";
    newBar.classList.add("bar");

    visualizerDiv.appendChild(newBar);
  }
}

//Bubble Sort

bubbleBtn.addEventListener("click", function () {
  bubbleBtn.disabled = true;

  let i = 0,
    j = 0;
  let listOfBars = document.querySelectorAll(".bar");
  let barsArray = Array.from(listOfBars);
  let len = barsArray.length;

  function bubbleSortStep() {
    if (i < len - 1) {
      if (j < len - 1 - i) {
        let firstBar = parseInt(barsArray[j].style.height);
        let secondBar = parseInt(barsArray[j + 1].style.height);

        if (firstBar > secondBar) {
          barsArray[j].style.height = secondBar + "px";
          barsArray[j + 1].style.height = firstBar + "px";
        }

        j++;
      } else {
        j = 0;
        i++;
      }

      setTimeout(bubbleSortStep, speed);

      barsArray[len - i].style.backgroundColor = "green";
    } else {
      barsArray[0].style.backgroundColor = "green";

      bubbleBtn.disabled = false;
    }
  }

  bubbleSortStep();
});

//Section Sort

selectionBtn.addEventListener("click", function () {
  selectionBtn.disabled = true;
  let i = 0,
    j = 0;
  let minIndex = i;
  let listOfBars = document.querySelectorAll(".bar");
  let barsArray = Array.from(listOfBars);
  let len = barsArray.length;

  function selectionSortStep() {
    if (i < len - 1) {
      if (j < len) {
        barsArray[minIndex].style.backgroundColor = "red";
        let firstBar = parseInt(barsArray[minIndex].style.height);
        let secondBar = parseInt(barsArray[j].style.height);

        if (firstBar > secondBar) {
          minIndex = j;
          barsArray[minIndex].style.backgroundColor = "red";
        }
        j++;
      } else {
        let firstBar = parseInt(barsArray[i].style.height);
        let minBar = parseInt(barsArray[minIndex].style.height);

        barsArray[i].style.height = minBar + "px";
        barsArray[minIndex].style.height = firstBar + "px";

        barsArray[i].style.backgroundColor = "green";

        for (let k = i + 1; k < len; k++) {
          barsArray[k].style.backgroundColor = "yellow";
        }
        i++;
        j = i + 1;
        minIndex = i;
      }

      setTimeout(selectionSortStep, speed);
    } else {
      barsArray[len - 1].style.backgroundColor = "green";
      selectionBtn.disabled = false;
    }
  }

  selectionSortStep();
});

// Insertion Sort

insertionBtn.addEventListener("click", function () {
  let i = 0,
    j = 0;
  let listOfBars = document.querySelectorAll(".bar");
  let barsArray = Array.from(listOfBars);
  let len = barsArray.length;

  function insertionSortStep() {
    for (i = 0; i < len; i++) {
      for (j = i; j > 0; j--) {
        let firstBar = parseInt(barsArray[j].style.height);
        let secondBar = parseInt(barsArray[j - 1].style.height);

        if (firstBar < secondBar) {
          barsArray[j].style.height = secondBar + "px";
          barsArray[j - 1].style.height = firstBar + "px";
        }
      }
    }
  }

  window.setInterval(insertionSortStep, speed);
});
