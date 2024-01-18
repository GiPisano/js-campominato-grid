const button = document.getElementById('play-btn');
const containerGrid = document.getElementById('container-grid');

getGrid(containerGrid);

button.addEventListener('click', function(){
    getGrid(containerGrid);
    console.clear()
});

function getGrid(container){
    container.innerHTML = '';
    // const difficulty = userDifficulty.value;
    
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


