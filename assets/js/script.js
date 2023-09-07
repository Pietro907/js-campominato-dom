/* 
Consegna:
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
pensiamo a quali strumenti ci servono, ad esempio: 
-Di cosa ho bisogno per generare i numeri?
-Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
-Eventuali validazioni e i controlli possiamo farli anche in un secondo momento.

Io sono a vs disposizione via Tickets fino alle 13. Mi raccomando, non sprecate quest'ora e mezza di lavoro ma iniziate subito a lavorare.
*/

console.log('Hello, world!');

/* 

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// tools
- eventListener
- let/const
- for
- append
- classList/toggle
- functions

*/


//Creo un ciclo for per creare 100 quadratini
const square = ` 
    <div class="col">
        <div class="card">
            <h3 style="color: white">  </h3>
        </div>
    </div>`;

const number = 1;

for (i = 0; i < 100; i++) {
    square;
    number;
    
    console.log(i);
    console.log(square);
    document.querySelector('.field').innerHTML += square ;
}

//Creo una sequenza di numeri da 1 a 0 usando il for che me li genera in automatico controllando di giro in giro l'indice i in progresione (i++)
for (i = 0; i < 100; i++) {
    number;
    
    document.querySelector('h3').innerHTML = number;
}