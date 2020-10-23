const container = document.querySelector('.container');

//Create Grid Div
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
container.appendChild(gridContainer);

//Create a Grid Item Div UNDER the gridContainer
const gridContainerParent = document.querySelector('.gridContainer');

//Use for loop to create the div elements
const createGrid = (size) => {
    for(let i = 0; i < size ** 2; i++){
        //console.log(i); // Prints 1- 16
        const gridItems = document.createElement('div');
        gridItems.classList.add('gridItems');
        //gridItems.textContent = "";
        gridContainerParent.appendChild(gridItems);
    };
    gridLayout(size);
};

const gridLayout = (size) => {
    let gridContainerLayout = document.querySelector('.gridContainer');
    gridContainerLayout.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainerLayout.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};

let gridSize = prompt('enter a number no more than 100 for screen size', 22);

const getGridSize = (gridSize) > 22 ? gridSize = 22 : '';

createGrid(gridSize);



