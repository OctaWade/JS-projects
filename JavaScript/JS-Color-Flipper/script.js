// Buttons

let simpleBtn = document.querySelector(".simple-btn");
let hexBtn = document.querySelector(".hex-btn");
let clickBtn = document.querySelector(".click-btn");

// HTML elements

let colorCode = document.querySelector(".color-code-rn");
let colorSpace = document.querySelector(".color-space");

// Arrays

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "olive",
  "navy",
  "teal",
  "maroon",
  "aqua",
  "fuchsia",
  "silver",
  "gold",
  "beige",
  "coral",
  "crimson",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lightblue",
  "lightgreen",
  "lightgrey",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightsteelblue",
  "limegreen",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "oldlace",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "plum",
  "powderblue",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "skyblue",
  "slateblue",
  "slategray",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "whitesmoke",
  "yellowgreen",
];

const alphabet = "ABCDEFabcdef0123456789";

//

let gameModeSimple = true;

simpleBtn.addEventListener("click", function () {
  gameModeSimple = true;
});

hexBtn.addEventListener("click", function () {
  gameModeSimple = false;
});

clickBtn.addEventListener("click", function () {
  if (gameModeSimple === true) {
    let randomIndex = Math.floor(Math.random() * 86);

    let color = colors[randomIndex];

    colorSpace.style.backgroundColor = color;
    colorCode.innerHTML = " " + color;
    clickBtn.style.backgroundColor = color;
  } else if (gameModeSimple === false) {
    let randomCode = "";

    for (let i = 0; i < 6; i++) {
      randomIndex = Math.floor(Math.random() * alphabet.length);

      randomCode = randomCode + alphabet[randomIndex];

      console.log(randomCode);

      colorCode.innerHTML = "#" + randomCode;
      colorSpace.style.backgroundColor = "#" + randomCode;
      clickBtn.style.backgroundColor = "#" + randomCode;
    }
  }
});
