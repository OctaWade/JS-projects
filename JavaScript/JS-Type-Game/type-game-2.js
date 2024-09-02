let startBtn = document.querySelector(".start-btn");
let refreshBtn = document.querySelector(".refresh-btn");
let currentTime = document.querySelector(".timer");
let enterText = document.querySelector(".typed-value");
let wordsDiv = document.querySelector(".quotes");

let isTimerRunning = false;
let gameRunning = false;

//COUNTERS

let wordIndex = 0;
let score = 0;
let k = 0;
let trueAnswer = 0;
let wrongAnswer = 0;

//CREATING WORDS

function creatingWords() {
  for (k; k < 100; k++) {
    let spanElement = document.createElement("li");
    // Generate a random integer between 0 and 100
    let i = Math.floor(Math.random() * 101);

    let word = words[i];

    spanElement.innerText = word;

    wordsDiv.appendChild(spanElement);
  }
}

//TIMER

let minutesTxt = document.getElementById("minute");
let secondsTxt = document.getElementById("second");

let minutes = 1;
let seconds = 60;

let mainSeconds = "0";
let mainMinutes = "0";

function timer() {
  seconds--;

  if (seconds / 60 != 1) {
    minutes = 0;
  }

  minutesTxt.innerText = minutes;
  secondsTxt.innerText = seconds;

  if (seconds < 10) {
    secondsTxt.innerText = mainSeconds + seconds.toString();
  }

  if (minutes === 0 && seconds === 0) {
    clearInterval(temp);
    minutesTxt.innerText = 1;
    secondsTxt.innerText = mainSeconds + 0;

    let result = document.querySelector(".result");
    result.style.display = "block";

    let lastScore = document.querySelector(".score");
    lastScore.innerText = score.toString();

    let lastTrue = document.querySelector(".trues");
    lastTrue.innerText = trueAnswer.toString();

    let lastWrong = document.querySelector(".falses");
    lastWrong.innerText = wrongAnswer.toString();

    gameRunning = false;
    score = 0;
    k = 0;
    wordIndex = 0;
    trueAnswer = 0;
    wrongAnswer = 0;

    let listItems = document.querySelectorAll(".quotes li:not(:first-child)");

    listItems.forEach((item) => {
      item.remove();
    });
  }
}

//REFRESH BUTTON

refreshBtn.addEventListener("click", function () {
  clearInterval(temp);
  minutesTxt.innerText = 1;
  secondsTxt.innerText = mainSeconds + 0;

  gameRunning = false;
  score = 0;
  k = 0;
  wordIndex = 0;
  trueAnswer = 0;
  wrongAnswer = 0;

  let listItems = document.querySelectorAll(".quotes li:not(:first-child)");

  listItems.forEach((item) => {
    item.remove();
  });
});
