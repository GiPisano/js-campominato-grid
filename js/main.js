const button = document.getElementById('play-btn');
const containerGrid = document.getElementById('container-grid');
const optionsDifficulty = document.querySelectorAll('.difficulty-select');

getGrid(containerGrid);

button.addEventListener('click', function(){
    getGrid(containerGrid);
    console.clear()
});

function getGrid(container, numberBox){
    container.innerHTML = '';
    
    for(let i = 1; i <= 100; i++){
        const boxIndex = generateBox(i);
        container.append(boxIndex);
    }
}

function generateBox(text){
    const box = document.createElement('div');
    box.classList.add('box');
    box.innerText = text;
    box.addEventListener('click', function(){
        clickbox(this);
        console.log(text)
    });

    return box;
}

function clickbox(element){
    element.classList.toggle('clicked');
}

let bomb = []


while(bomb.length < 16){
    let myNums = [Math.floor(Math.random() * (100 - 1) ) + 1];
    if(!bomb.includes(myNums)){
        bomb.push(myNums)
    }
}
console.table(bomb)