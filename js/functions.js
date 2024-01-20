// funzione per cambiare difficoltà
function handleDifficultyClick(valueDifficulty) {
    if (valueDifficulty == 'easy') {
        currentDifficulty = 100;
        return 'easy';
    }
    if (valueDifficulty == 'medium') {
        currentDifficulty = 81;
        return 'medium';
    }
    if (valueDifficulty == 'hard') {
        currentDifficulty = 49;
        return 'hard';
    }
}

// funzione genera griglia
function getGrid(container, numberBox, difficultyClass) {
    console.log('Generating grid with difficulty:', numberBox);
    container.innerHTML = '';

    for (let i = 1; i <= numberBox; i++) {
        const boxIndex = generateBox(i, difficultyClass);
        container.append(boxIndex);
    }
}

// funzione genera singolo box
function generateBox(text, difficultyClass) {
    const box = document.createElement('div');
    box.classList.add('box', difficultyClass);

    box.innerText = text;
    box.addEventListener('click', function(){
        clickbox(this);
        console.log(text);
    });

    return box;
}

// funzione che al click fa cambiare colore al box clickato
function clickbox(element) {
    element.classList.toggle('clicked');
}