let timer = document.querySelector(".timer");
let currentTime = document.getElementById("time");
let startButton = document.querySelector(".start-btn");
let resetButton = document.querySelector(".reset-btn");
let playIcon = document.querySelector(".start-icon");

let secondsTxt = document.getElementById("second");
let minutesTxt = document.getElementById("minute");
let hourstxt = document.getElementById("hour");
let intervalidId;

let hours = 0;
let minutes = 0;
let seconds = 0;

let mainSeconds = "0";
let mainMinutes = "0";
let mainHours = "0";

startButton.addEventListener("click", function () {
  if (playIcon.name === "play-outline") {
    intervalidId = window.setInterval(stopWatch, 1000);

    playIcon.name = "pause-outline";
    startButton.style.backgroundColor = "orange";
  } else if (playIcon.name === "pause-outline") {
    clearInterval(intervalidId);

    playIcon.name = "play-outline";
    startButton.style.backgroundColor = "green";
  }
});

resetButton.addEventListener("click", function () {
  clearInterval(intervalidId);
  hours = 0;
  minutes = 0;
  seconds = 0;

  secondsTxt.innerText = mainSeconds + seconds.toString();
  minutesTxt.innerText = mainMinutes + minutes.toString();
  hourstxt.innerText = mainHours + hours.toString();

  if (playIcon.name === "pause-outline") {
    playIcon.name = "play-outline";
    startButton.style.backgroundColor = "green";
  }
});

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    minutes++;

    seconds = 0;
  } else if (minutes / 60 === 1) {
    hours++;

    minutes = 0;
  }

  hourstxt.innerText = hours;
  minutesTxt.innerText = minutes;
  secondsTxt.innerText = seconds;

  if (seconds < 10) {
    secondsTxt.innerText = mainSeconds + seconds.toString();
  }

  if (minutes < 10) {
    minutesTxt.innerText = mainMinutes + minutes.toString();
  }

  if (hours < 10) {
    hourstxt.innerText = mainHours + hours.toString();
  }
}
