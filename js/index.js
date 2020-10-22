const container = document.querySelector('.container');

//Create Grid Div
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
container.appendChild(gridContainer);

//Create a Grid Item Div UNDER the gridContainer
const gridContainerParent = document.querySelector('.gridContainer');


const gridLayout = () =>{
    let gridContainerLayout = document.querySelector('.gridContainer');
    gridContainerLayout.style.gridTemplateColumns = `repeat(${size}, auto)`;
    gridContainerLayout.style.gridTemplateRows = `repeat(${size}, auto)`;
};


//Use for loop to create the div elements
const createGrid = (size) =>{
    for(let i = 0; i < size; i++){
        //console.log(i); // Prints 1- 16
        const gridItems = document.createElement('div');
        gridItems.classList.add('gridItems');
        //gridItems.textContent = "";
        gridContainerParent.appendChild(gridItems);
    };
    gridLayout();
};




const loadPrompt = () =>{
    //promt('text', deafault Input set by coder);
    let gridSize = prompt('enter a number no more than 100 for screen size', 32);
    if(gridSize > 100){
        gridSize = 100;
    }

    createGrid(gridSize);
}

window.onload = loadPrompt();




