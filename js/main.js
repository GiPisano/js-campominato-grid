const button = document.getElementById('play-btn');
const containerGrid = document.getElementById('container-grid');
const optionsDifficulty = document.querySelectorAll('#difficulty-select');

let currentDifficulty;
let classDifficulty;
let bombList = [];
let gameOver = false;

// scorro nelle opzioini della difficoltà
for (let i = 0; i < optionsDifficulty.length; i++) {
    let difficultyOption = optionsDifficulty[i];

    // evento che prende l'opzione singolarmente e fa cambiare la classe dell'opzione 
    difficultyOption.addEventListener('click', function () {
        const valueDifficulty = this.value;
        classDifficulty = handleDifficultyClick(valueDifficulty);
        getGrid(containerGrid, currentDifficulty, classDifficulty);
    });

}

// evento che al click del tasto play richiama la funzione genera griglia
button.addEventListener('click', function(){
    gameOver = false;
    
    console.clear();
});

