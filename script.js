let size_button = document.querySelector(".size");
let color_button = document.querySelector(".color");
let reset_button = document.querySelector(".reset-button");
let start_button = document.querySelector(".start-button");

let grid = document.querySelector(".grid");
let divPerWidth, divPerHeight, color;
const MAX_HEIGHT = 300, MAX_WIDTH = 600;

function makeGrid(){
    divPerHeight  = parseInt(size_button.value);
    divPerWidth = divPerHeight * 2;
    color = color_button.value;

    if (divPerHeight <= 50) {
        //create div size
        let divSize = MAX_HEIGHT / divPerHeight;

        grid.style.display = "flex";
        grid.style.flexDirection = "column";
        
        for (let i = 0; i < divPerHeight; i++) {
            let  row = document.createElement("div");
            row.style.display = "flex";
            
            for( let j = 0; j < divPerWidth; j++) {
                let cell = document.createElement("div");
                cell.style.height = divSize + "px";
                cell.style.width = divSize + "px";
                cell.style.border = "solid 1px rgb(49, 38, 8)";
                cell.style.boxSizing = "border-box";

                cell.addEventListener("mouseover", function() {
                    cell.style.backgroundColor = color_button.value;  // Change the color to the selected one
                });

                row.appendChild(cell);
            }

            grid.appendChild(row);
        }

    }
};

function resetGrid() {
    grid.innerHTML="";
};

function clearGrid() {
    let rows = grid.children;

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].children;

        for(let j = 0; j < cells.length; j++){
            let cell = cells[j];
            cell.style.backgroundColor = "rgb(247, 247, 247)";
        }
    }
};

start_button.addEventListener("click", () => {
    resetGrid();
    makeGrid();
});

reset_button.addEventListener("click", () => {
    clearGrid();
});