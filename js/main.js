const button = document.getElementById("play-btn");
const containerGrid = document.getElementById("container-grid");
const optionsDifficulty = document.querySelectorAll("#difficulty-select");
const scoreUser = document.querySelector(".score");

let currentDifficulty = 100;
let classDifficulty = "easy";
let bombList = [];
let gameOver = false;
let score = 0;

// scorro nelle opzioni della difficoltà
for (let i = 0; i < optionsDifficulty.length; i++) {
  let difficultyOption = optionsDifficulty[i];

  // evento che prende l'opzione singolarmente e fa cambiare la classe dell'opzione
  difficultyOption.addEventListener("change", function () {
    const valueDifficulty = this.value;
    classDifficulty = handleDifficultyClick(valueDifficulty);
    getGrid(containerGrid, currentDifficulty, classDifficulty);
  });
}

// evento che al click del tasto play richiama la funzione genera griglia
button.addEventListener("click", function () {
  score = 0;
  scoreUser.innerText = `Score: ${score}`;
  gameOver = false;
  bombList = generateBombList(16, currentDifficulty);
  getGrid(containerGrid, currentDifficulty, classDifficulty);
  console.clear();
});
