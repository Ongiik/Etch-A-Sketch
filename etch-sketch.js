//creates 256 div elements in container
const container = document.querySelector('#container');

function makeRows(rows, cols) {
   container.style.setProperty('--grid-rows', rows);
   container.style.setProperty('--grid-cols', cols);
   for (c = 0; c < (rows * cols); c++){
      let cell = document.createElement('div');
      cell.addEventListener('mouseover', paintBlack);
      cell.addEventListener('mousedown', paintBlack);
      container.appendChild(cell).className = "gridItem";
   };
};

makeRows(16, 16);

//colors when mouse is down && hovers over grid element, returns once mouse is up.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
//color pick
let defaultColor = 'black';
function paintBlack(e) {
   if (e.type === 'mouseover' && !mouseDown) return;
   e.target.style.backgroundColor = defaultColor;
}

function resetGrid() {
   const gridCells = document.querySelectorAll('.gridItem');
   gridCells.forEach(gridItem => gridItem.style.backgroundColor = 'white');
}

function changeGrid(e) {
   let changeSizePrompt = prompt("Enter a number for the grid size. (16 -> 16x16)");
   if(changeSizePrompt > 90 || changeSizePrompt < 0) return;
   makeRows(changeSizePrompt, changeSizePrompt);
}

const settings = document.querySelector('#settings');
//gridSizeButton
let gridSizeButton = document.createElement('button');
gridSizeButton.textContent = "Change Grid Size";
gridSizeButton.addEventListener('click', changeGrid);
settings.appendChild(gridSizeButton).className = "btn";
//resetButton
let resetButton = document.createElement('button');
resetButton.textContent = "Reset Canvas";
resetButton.addEventListener('click', resetGrid);
settings.appendChild(resetButton).className = "btn";
//paintBrush
let paintBrush = document.createElement('button');
paintBrush.textContent = "Paint Brush";
paintBrush.addEventListener('click', () => defaultColor = 'black');
settings.appendChild(paintBrush).className = "btn";
//eraserButton
let eraserButton = document.createElement('button');
eraserButton.textContent = "Eraser";
eraserButton.addEventListener('click', () => defaultColor = 'white');
settings.appendChild(eraserButton).className = "btn";