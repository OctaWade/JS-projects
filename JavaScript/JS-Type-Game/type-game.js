let startBtn = document.querySelector(".start-btn");
let refreshBtn = document.querySelector(".refresh-btn");
let currentTime = document.querySelector(".timer");
let enterText = document.querySelector(".typed-value");
let wordsDiv = document.querySelector(".quotes");

let temp;
let isTimerRunning = false;
let gameRunning = false;
let currentValue;

// COUNTERS
let wordIndex = 0;
let score = 0;
let k = 0;
let trueAnswer = 0;
let wrongAnswer = 0;

//START BUTTON

//CREATING THE WORDS

function creatingWords() {
  if (gameRunning === false) {
    let quotesWidth = document.querySelector(".quotes-width");
    quotesWidth.style.display = "none";

    currentValue = "";
    enterText.value = "";

    for (k; k < 24; k++) {
      let spanElement = document.createElement("li");
      // Generate a random integer between 0 and 100
      let i = Math.floor(Math.random() * 101);

      let word = words[i];

      spanElement.innerText = word;

      wordsDiv.appendChild(spanElement);

      //CREATING ROWS WITH BR (NO NEED ANYMORE THANKS TO CSSGRID)
      // if (k === 9 || k === 19) {
      //   let brElement = document.createElement("br");
      //   let brWord = words[i];

      //   brElement.innerText = brWord;

      //   wordsDiv.appendChild(brElement);
      // }
    }
  }
}

const words = [
  "over",
  "also",
  "even",
  "new",
  "many",
  "much",
  "well",
  "where",
  "before",
  "after",
  "most",
  "should",
  "every",
  "such",
  "under",
  "between",
  "still",
  "never",
  "however",
  "always",
  "without",
  "sometimes",
  "together",
  "already",
  "almost",
  "usually",
  "once",
  "ourselves",
  "yourselves",
  "themselves",
  "piano",
  "violin",
  "drum",
  "painting",
  "drawing",
  "sculpture",
  "art",
  "museum",
  "gallery",
  "exhibition",
  "apple",
  "river",
  "mountain",
  "book",
  "pencil",
  "keyboard",
  "computer",
  "mouse",
  "bottle",
  "cup",
  "tree",
  "forest",
  "flower",
  "grass",
  "sky",
  "cloud",
  "rain",
  "storm",
  "sun",
  "moon",
  "star",
  "planet",
  "galaxy",
  "universe",
  "atom",
  "molecule",
  "cell",
  "organ",
  "body",
  "mind",
  "theater",
  "play",
  "actor",
  "actress",
  "director",
  "producer",
  "writer",
  "author",
  "novel",
  "story",
  "poem",
  "poetry",
  "essay",
  "AhmetTheBeast",
  "IhsanTheNormalGuy",
  "volkanTheEarth",
  "BoraTheBest",
  "minecraft",
  "leagueoflegends",
  "diablo",
  "different",
  "watch",
  "mountain",
  "country",
  "president",
  "capital",
  "backpack",
  "plaza",
  "window",
  "broken",
];

startBtn.addEventListener("click", creatingWords);

startBtn.addEventListener("click", function () {
  if (gameRunning === false) {
    let allWords = document.querySelectorAll(".quotes li");

    let currentWord = allWords[0];
    currentWord.style.backgroundColor = "#b1b1b1";
    gameRunning = true;
  }
});

// GETTING TYPED VALUE

let finalAnswer = "";

enterText.addEventListener("input", typedValue);

function typedValue(event) {
  currentValue = event.target.value;
  if (event.data === " " && wordIndex < 23) {
    finalAnswer = currentValue;

    currentValue = "";
    enterText.value = "";

    let allWords = document.querySelectorAll(".quotes li");

    let currentWord = allWords[wordIndex + 1];
    currentWord.style.backgroundColor = "#b1b1b1";

    let pastWord = allWords[wordIndex];
    pastWord.style.backgroundColor = "#d3d2d2";
  }

  if (!isTimerRunning) {
    temp = window.setInterval(timer, 1000);
    isTimerRunning = true;
  }

  //Trying to delete first row but it doesn't work unlucky

  // if (wordNumber === 9 || wordNumber === 18) {
  //   wordNumber++;
  //   k = 16;

  //   for (let i = 0; i < 8; i++) {
  //     if (wordsDiv.firstElementChild) {
  //       wordsDiv.removeChild(wordsDiv.firstElementChild);
  //     }
  //   }
  // }
}

enterText.addEventListener("input", function (event) {
  if (event.data === " " && wordIndex === 23) {
    while (wordsDiv.children.length > 1) {
      wordsDiv.removeChild(wordsDiv.children[1]);
    }
    k = 0;
    wordIndex = 0;
    gameRunning = false;
    creatingWords();
  }
});

//CHECKING THE ANSWER

enterText.addEventListener("input", answerCheck);

function answerCheck(event) {
  if (event.data === " ") {
    let allWords = document.querySelectorAll(".quotes li");
    console.log(allWords[wordIndex].innerText);
    console.log(finalAnswer);

    if (finalAnswer == allWords[wordIndex].innerText + " ") {
      score++;
      trueAnswer++;

      let currentWord;
      currentWord = allWords[wordIndex];
      console.log(currentWord);
      currentWord.style.color = "green";
    } else if (finalAnswer !== allWords[wordIndex].innerText) {
      currentWord = allWords[wordIndex];
      currentWord.style.color = "red";

      wrongAnswer++;
    }
    wordIndex++;
  }
}

// 1 MINUTE TIMER

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
