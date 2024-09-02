window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "tr-TR";

let p = document.createElement("p");
let word = document.querySelector(".words");

word.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  const poopScript = transcript.replace(/ozan|defne|zehra|zeynep/gi, "💩");
  p.textContent = poopScript;
});

recognition.addEventListener("end", recognition.start);

recognition.start();
