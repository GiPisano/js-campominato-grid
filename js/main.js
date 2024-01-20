const button = document.getElementById('play-btn');
const containerGrid = document.getElementById('container-grid');
const optionsDifficulty = document.querySelectorAll('#difficulty-select');

let currentDifficulty = 100;
let classDifficulty = 'easy';

for (let i = 0; i < optionsDifficulty.length; i++) {
    let difficultyOption = optionsDifficulty[i];

    difficultyOption.addEventListener('click', function () {
        const valueDifficulty = this.value;
        classDifficulty = handleDifficultyClick(valueDifficulty);
    });
}

// evento che al click del tasto play richiama la funzione genera griglia
button.addEventListener('click', function(){
    console.log('Play button clicked');
    getGrid(containerGrid, currentDifficulty, classDifficulty);
    console.clear();
});

while(bomb.length < 16){
    let myNums = [Math.floor(Math.random() * (100 - 1) ) + 1];
    if(!bomb.includes(myNums)){
        bomb.push(myNums)
    }
}
console.table(bomb)