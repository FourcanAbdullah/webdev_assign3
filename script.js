let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let table = document.querySelector("#grid")
    if (numCols === 0 || numRows === 0) {
        numCols = numCols + 1;
    }
    let row = document.createElement("TR")
    numRows = numRows + 1;
    for (let i = 0; i < numCols; i++) {
        let col = document.createElement("TD")
        col.onclick = function () {
            col.style.backgroundColor = colorSelected;
        }
        row.appendChild(col)

    }
    table.appendChild(row)
    console.log(`addR Rows: ` + numRows)
    console.log(`addR Cols: ` + numCols)
}
//Adds a column
function addC() {
    if (numRows === 0 || numCols === 0) {
        addR();
    }
    else {
        numCols = numCols + 1;
        let table = document.querySelectorAll("#grid TR")
        for (let i = 0; i < numRows; i++) {
            let col = document.createElement("TD")
            col.onclick = function () {
                col.style.backgroundColor = colorSelected;
            }
            table[i].appendChild(col)
        }
        console.log(`addC Rows: ` + numRows)
        console.log(`addC Cols: ` + numCols)
    }

}

//Removes a row
function removeR() {
    if (numRows === 0) {
        alert("No more Rows")
    }
    else {
        document.querySelector("TR").remove();
        numRows = numRows - 1;
    }
    if (numRows === 0) {
        if (numCols !== 0) {
            numCols = 0
        }
    }
    console.log(`RemoveR Rows: ` + numRows)
    console.log(`RemoveR Cols: ` + numCols)
}
//Remove a column
function removeC() {
    if (numCols === 0) {
        alert("No more Colums")

    }
    else {
        let table = document.querySelectorAll("#grid TR")
        for (let i = 0; i < numRows; i++) {
            table[i].lastElementChild.remove();

        }
        numCols = numCols - 1;
        console.log(`RemoveC Rows: ` + numRows)
        console.log(`RemoveC Cols: ` + numCols)

    }
    if (numCols === 0) {
        if (numRows !== 0) {
            let temp = numRows
            for (let i = 0; i < temp; i++)
                removeR();
        }
    }

}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() {
    //alert("Clicked Fill All")
    let table = document.querySelectorAll("#grid TR TD")
    for (let i = 0; i < numRows * numCols; i++) {
        table[i].style.backgroundColor = colorSelected;
    }
}

function clearAll() {
    let table = document.querySelectorAll("#grid TR TD")
    for (let i = 0; i < numRows * numCols; i++) {
        table[i].style.backgroundColor = "white";
    }

}
function DeleteTable() {
    if (numCols === 0 || numRows === 0) {
        alert("Cleared!")
    }
    else {
        let table = document.querySelectorAll("#grid TR")
        for (let i = 0; i < numRows; i++) {
            table[i].remove();

        }
        numCols = 0
        numRows = 0
    }
}

function fillU() {
    // alert("Clicked Fill All Uncolored")
    let table = document.querySelectorAll("#grid TR TD")

    for (let i = 0; i < numRows * numCols; i++) {
        if (table[i].style.backgroundColor === "" || table[i].style.backgroundColor === "white") {
            table[i].style.backgroundColor = colorSelected;
        }
    }
}
