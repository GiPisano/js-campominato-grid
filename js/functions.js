// genero numero casuale 
function randomNumber(min, max){
    let myNums = Math.floor(Math.random() * (max - min + 1) ) + min;
    return myNums
}

// funzione per cambiare difficoltà
function handleDifficultyClick(valueDifficulty) {
    if (valueDifficulty == 'easy') {
        currentDifficulty = 100;
        bombList = generateBombList(16, currentDifficulty);
        return 'easy';
    }
    if (valueDifficulty == 'medium') {
        currentDifficulty = 81;
        bombList = generateBombList(16, currentDifficulty);
        return 'medium';
    }
    if (valueDifficulty == 'hard') {
        currentDifficulty = 49;
        bombList = generateBombList(16, currentDifficulty);
        return 'hard';
    }
}

// funzione genera griglia
function getGrid(container, numberBox, difficultyClass) {
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
    box.setAttribute('data-index', text)

    // 

    box.addEventListener('click', function(){
        box.innerText = text;
        clickbox(this);
        
    });
    // 

    return box;
}

// funzione che al click fa cambiare colore al box clickato
function clickbox(element) {
    const boxIndex = parseInt(element.innerText);
    console.log('Casella cliccata con testo:', boxIndex);

    if(!gameOver){
        if(bombList.includes(boxIndex)){
            console.log('buum');
            revealAllBombs()
            element.classList.add('bomb');
            gameOver = true;
            
            alert('hai perso');
        }else{
            console.log('vuoto');
            element.classList.add('clicked');    
            // allert('hai vinto')    
        }
    }else {
        // resetto le variabili
        gameOver = false;
        bombList = generateBombList(16, currentDifficulty);
        getGrid(containerGrid, currentDifficulty, classDifficulty);
        console.clear();
    }
}

// funzione genera bombe
function generateBombList(bombs, classe){
    let bombList = [];
    while(bombList.length < bombs){
        let myNums = randomNumber(1, classe)
        if(!bombList.includes(myNums)){
            bombList.push(myNums)
        }
    }
    console.table(bombList)
    return bombList
}

//funzione per mostrare tutte le bombe
function revealAllBombs() {
    const boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        const boxIndex = parseInt(box.getAttribute('data-index'));
        if (bombList.includes(boxIndex)) {
            box.classList.add('bomb');
            box.innerText = boxIndex;
        }
    }
}