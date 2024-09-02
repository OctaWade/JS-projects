$(document).ready(function () {
  let answerHtml = document.getElementById("answer");
  $(answerHtml).hide();

  let magic8Ball = {};
  magic8Ball.listOfAnswers = [
    "No",
    "Yes",
    "I don't think so...",
    "Of course!",
    "Indubitably",
    "In your dreams.",
  ];

  magic8Ball.askQuestion = function (question) {
    $("#8ball").effect("shake", { duration: 2300 });

    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
    );

    $(answerHtml).fadeIn(4000);

    let randomNumber = Math.random();

    let randomIndex = Math.floor(randomNumber * this.listOfAnswers.length);

    let answer = this.listOfAnswers[randomIndex];

    $(answerHtml).text(answer);

    gameRunning = false;
  };

  let btn = document.getElementById("questionButton");
  let gameRunning = false;

  btn.addEventListener("click", function () {
    if (gameRunning === false) {
      $(answerHtml).hide();

      $("#8ball").attr(
        "src",
        "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
      );

      setTimeout(() => {
        let question = prompt("ASK A YES/NO QUESTION!");

        magic8Ball.askQuestion(question);
      }, 500);

      gameRunning = true;
    }
  });
});
