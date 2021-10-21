let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    //alert("Clicked Add Row")
    let newRow = grid.appendChild(document.createElement("tr"));
    let newCell = newRow.appendChild(document.createElement("td"));
    if (numRows === 0) {
        numCols = 0;   
        newCell.onclick = paintCell;
        numRows++;
        numCols++;
    }
    else {
        newCell.onclick = paintCell;
        for (let i = 1; i < numCols; i++) {
            newRow.appendChild(document.createElement("td")).onclick = paintCell;
        }
        numRows++;
    }
    printGridSize();
}
//Add a column
function addC() {
    //alert("Clicked Add Col")
    if (numCols === 0) {
        numRows = 0;
        grid.appendChild(document.createElement("tr")).appendChild(document.createElement("td")).onclick = paintCell;
        numRows++;
        numCols++;
    }
    else {  
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].appendChild(document.createElement("td")).onclick = paintCell;
        }
        numCols++; 
    } 
    printGridSize();
}

//Remove a row
function removeR() {
    //alert("Clicked Remove Row")
    if (numRows !== 0) 
    {
        grid.removeChild(grid.lastElementChild);
        if (numRows > 0) {
            numRows--;
        }
        if (numRows === 0) {
            numCols = 0;
        }
    }
    printGridSize();
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    if (numCols !== 0) 
    {
        for (let i = 0; i < grid.rows.length; i++) {
            if (grid.rows[i].cells.length > 0) {
                grid.rows[i].deleteCell(-1);
            }
        }
        if (numCols > 0) {
            numCols--;
        }
        if (numCols === 0) {
            numRows = 0;
        }
    }
    printGridSize();
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() {
    //alert("Clicked Fill All")
    paintGrid(colorSelected);
}

function clearAll(){
    //alert("Clicked Clear All")
    paintGrid("white");
}

function fillU(){
    //alert("Clicked Fill All Uncolored")
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid.querySelectorAll("tr")[i].querySelectorAll("td")[j].style.backgroundColor === "" || grid.querySelectorAll("tr")[i].querySelectorAll("td")[j].style.backgroundColor === "white") {
                grid.querySelectorAll("tr")[i].querySelectorAll("td")[j].style.backgroundColor = colorSelected;
            }
        }
    }
}

function paintCell() { this.style.backgroundColor = colorSelected; } 

function paintGrid(color) {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            grid.querySelectorAll("tr")[i].querySelectorAll("td")[j].style.backgroundColor = color;
        }
    }
}

function printGridSize() { console.log(`columns: ${numCols} rows:  ${numRows}`); }