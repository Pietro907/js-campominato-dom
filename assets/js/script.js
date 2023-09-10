
/*

 Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. 

*/

const generateGrid = document.getElementById("genera_grid");
const resetGrid = document.getElementById("reset_grid");
const fieldElement = document.querySelector(".field");
const limit = 100;


function generateMineField(Element, limit) {

    console.log("Cella generata");

    for (let i = 0; i < limit; i++) {
        
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        console.log(cellElement + ' ECCOLOOOOO');
        Element.append(cellElement);
        const cellValue = i + 1;
        /* cellElement.innerHTML = cellValue; */
        
        //l'addEventListener viene associato a ogni cella ogni volta che viene creata durante il ciclo e rimane in attesa.
        cellElement.addEventListener("click", function () {

            
            this.classList.toggle("color_green");
            console.log(cellValue);
            cellElement.innerHTML = cellValue;

        })

    }
};

//Funzione per rimuovere le mine
function removeMineField(limit) {

    console.log("removing cells");


    fieldElement.innerHTML = "";

}

//Genera griglia
generateGrid.addEventListener("click", function () {

    
    generateGrid.classList.toggle("active");

    if (generateGrid.classList.contains("active")) {

        generateMineField(fieldElement, limit);


    }
});

//Reset griglia
resetGrid.addEventListener("click", function () {

    if (generateGrid.classList.contains("active")) {
        
        console.log("resetting the field");

        removeMineField(limit);

        

    }

});

