//creates 256 div elements in container
const container = document.querySelector('#container');

function makeRows(rows, cols) {
   container.style.setProperty('--grid-rows', rows);
   container.style.setProperty('--grid-cols', cols);
   for (c = 0; c < (rows * cols); c++){
      let cell = document.createElement('div');
      cell.addEventListener('mouseover', paintBlack);
      container.appendChild(cell).className = "gridItem";
   };
};

makeRows(16, 16);



function paintBlack(e) {
   e.target.style.backgroundColor = 'rgb(0, 0, 0)';
   e.target.style.opacity = 0;
}
/*
let gridCell = document.querySelectorAll('.gridItem');
gridCell.addEventListener('hover', paintBlack);
*/
//create a 16 x 16 grid
//when mouse hovers over a grid, add a class to that grid that changes it to black.