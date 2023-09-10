
/*

 Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. 

*/

const fieldElement = document.querySelector(".field");
const generateGrid = document.getElementById("genera_grid");
const resetGrid = document.getElementById("reset_grid");
const limit = 100;
const listBombs = [];
const minesToGenerate = 16;  
const fieldSize = document.getElementById("fieldSize");


/**
 * 
 * @param {*} Element //è l'elemento della DOM all interno della funzione (in questo caso è const cellElement = document.createElement('div');)
 * @param {*} limit //è il numero delle celle create
 */

function generateMineField(Element, limit) {

    for (let i = 0; i < limit; i++) {

        const cellElement = document.createElement('div');
        const cellValue = i + 1; // lo posso fare anche cambiando i in i = 1 nel ciclo for;
        cellElement.classList.add('cell');
        //fieldElement.style.width = `calc (100% / ${Math.sqrt(limit)})` per rendere omegenea la tabella ma non funziona, manca il form>button 'play'???
        Element.append(cellElement);
        cellElement.innerHTML = cellValue;
        



        //l'addEventListener viene associato a ogni cella ogni volta che viene creata durante il ciclo e rimane in attesa.
        cellElement.addEventListener("click", function generateBombs(bombs) {
            //console.log(this); //log se il click funziona
            this.classList.toggle("color_green"); //mi fa spegnere ed accendere la cella con la classe .color_green
            console.log(cellValue);
            //cellElement.innerHTML = cellValue; //stampa il valore numerico della cella al click

            
            /*if (bombs == cellValue) {
                listBombs.push(bombs);
                this.classList.toogle('color_red');
                cellElement.innerHTML = cellValue;
            } else {
                
            } 
             */
        }
        )
        

    }

    
};

//Genera 16 mine casuali //Utilizziamo il while che a differenza del for se il numero generato è presente dentro la lista va avanti e non pusha...il for pusha all'infinito!
        
const bombsList = [];

while (bombsList.length < 16) {

    const numberRandom = Math.floor(Math.random() * 100)

    console.log(numberRandom);
    bombsList.push(numberRandom);
}
console.log(bombsList);





//Funzione per rimuovere le mine
function removeMineField(limit) {

    //console.log("removing cells");


    fieldElement.remove('cell'); 

}

//Genera griglia
generateGrid.addEventListener("click", function () {


    generateGrid.classList.toggle("active");
    generateMineField(fieldElement, limit);

    /*     if (generateGrid.classList.contains("active")) {
    
    
    
        } */
});

//Reset griglia
resetGrid.addEventListener("click", function () {

    if (generateGrid.classList.contains("active")) {

        console.log("resetting the field");

        removeMineField(limit);



    }

});


/* 
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
 */










function generateMines(minesNumber, limit) {
    const minesList = [];

    /*  With For Loop

    for (let i = 0; minesList.length < minesNumber; i++) {
    
            let mine = Math.floor(Math.random() * limit) + 1;
    
            if (!minesList.includes(mine)) {
                minesList.push(mine);
            }
    
        }
    
    */
    //Finche l'array lista di mine è inferiore del numero di mine
    while (minesList.length < minesNumber) {

        //genera un numero casuale tra 1 e il numero massimo d celle
        let mine = Math.floor(Math.random() * limit) + 1;

        //se questo valore non è incluso nell'array minesList, viene pushato dentro
        if (!minesList.includes(mine)) {

            minesList.push(mine);

        }

    }

    console.log("Mines =", minesList);
    return minesList;

}