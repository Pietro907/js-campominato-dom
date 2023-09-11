
/*

 Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. 

*/

const fieldElement = document.querySelector(".field");
console.log(fieldElement);
const generateGrid = document.getElementById("genera_grid");
const resetGrid = document.getElementById("reset_grid");
const limit = 100;
const listBombs = [];
const minesToGenerate = 16;



/**
 * 
 * @param {*} Element //è l'elemento della DOM all interno della funzione (in questo caso è const cellElement = document.createElement('div');)
 * @param {*} limit //è il numero delle celle create
 */

function generateMineField(Element, limit) {

    for (let i = 0; i < limit; i++) {

        const cellElement = document.createElement('div');
        const cellValue = i + 1;; // lo posso fare anche cambiando i in i = 1 nel ciclo for;
        cellElement.classList.add('cell');
        //fieldElement.style.width = `calc (100% / ${Math.sqrt(limit)})` per rendere omegenea la tabella ma non funziona, manca il form>button 'play'???

        Element.append(cellElement);
        cellElement.innerHTML = cellValue;

        //l'addEventListener viene associato a ogni cella ogni volta che viene creata durante il ciclo e rimane in attesa.
        cellElement.addEventListener("click", function generateBombs() {
            //console.log(this); //log se il click funziona
            this.classList.toggle("color_green"); //mi fa spegnere ed accendere la cella con la classe .color_green
            console.log(cellValue);
            //cellElement.innerHTML = cellValue; //stampa il valore numerico della cella al click

        }
        )


    }

};


//Genera griglia
generateGrid.addEventListener("click", function () {


    generateGrid.classList.toggle("active");

    generateMineField(fieldElement, limit);


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


//Genera 16 mine casuali 
function generateMine() {

    //Creo una lista
    const bombsList = [];

    //Utilizziamo il while che a differenza del for se il numero generato è presente dentro la lista va avanti e non pusha...il for pusha all'infinito!
    //Creo una listantrolla se in tutta la lunghezza/posizioni dell'array è presente un determinato numero
    while (bombsList.length < 16) {
        //Genero il numero random
        const numberRandom = Math.floor(Math.random() * 100)
        //Se non/(!) include bombsList il numero random pushalo dentro 
        if (!bombsList.includes(numberRandom)) {
            //console.log(numberRandom);
            bombsList.push(numberRandom);
        }

    }
    console.log(bombsList);
    return bombsList
}


//Creo una variabile con tutte i div
const allCells = document.querySelectorAll('div');//Creo una variabile con tutte i div

//Creo una variabile con tutte i div
const bombs = generateMine();

function startGame(S) {
    allCells;
    console.log(allCells);

    bombs;
    // attach an event on click on every cell
    for (let index = 0; index < allCells.length; index++) {

        const cellsList = allCells[index];

        function handleClick() {
            console.log(this);

            // make sure the inner cell text is a number


            if (bombs.includes(Number(this.innerText))) {
                console.log('bomb');
                this.innerText = '💣'
                this.style.backgroundColor = 'red';
                // Game over
                gameOver(attempts)

            } else {
                console.log('safe');
                // option 2
                attempts++

                this.classList.toggle('color_green')

                // option 1
                this.classList.add('color_red')

                if (attempts === level - 16) {
                    gameOver(bombs, 'you win!', attempts)
                }



            }
        }


    }

}


/* function gameOver(bombs) {

    const cells = document.querySelectorAll('div')

    for (let index = 0; index < cells.length; index++) {
        const cellDomEl = cells[index];
        console.log(cellDomEl);

        if (bombs.includes(Number(cellDomEl))) {
            //console.log('ciaoooooo');
            cellDomEl.style.backgroundColor = 'red';
            this.innerHTML = 'BOOM'
        } else {
            console.log('ciaoooooo');
            this.classList.add('color_red');
        }
    }
}
 */
















/*     //Con il metodo .sort(e la funzione all'interno delle parentesi) ordino in crescente i numeri della lista  
    bombsList.sort(function (a, b) { return a - b });
    console.log(bombsList);

    while (bombsList.sort(function (a, b) { return a - b }) == numberRandom) {
        console.log('BOMBS');
    } */