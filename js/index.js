const container = document.querySelector('.container');

//Create Grid Div
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
container.appendChild(gridContainer);

//Create a Grid Item Div UNDER the gridContainer
const gridContainerParent = document.querySelector('.gridContainer');
//Use for loop to create the div elements
for(let i = 0; i < 100; i++){
    //console.log(i); // Prints 1- 16
    const gridItems = document.createElement('div');
    gridItems.classList.add('gridItems');
    //gridItems.textContent = "";
    gridContainerParent.appendChild(gridItems);
};




