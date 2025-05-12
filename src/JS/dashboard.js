import Flashcard from "./flashcard.js";
import Deck from "./deck.js";


let modal = document.querySelector('.modal');
let form = document.querySelector('.form');
let addDeckButton = document.querySelector('.add-deck');
let submitPost = document.querySelector('.sub-form');

addDeckButton.addEventListener('click', () => {
  modal.showModal();
});

submitPost.addEventListener('click', () => {
    let title = document.querySelector('#title').value;
    let t1 = document.querySelector('#term-1').value;
    let d1 = document.querySelector('#def-1').value;
    let t2 = document.querySelector('#term-2').value;
    let d2 = document.querySelector('#def-2').value;
    let t3 = document.querySelector('#term-3').value;
    let d3 = document.querySelector('#def-3').value;
    let t4 = document.querySelector('#term-4').value;
    let d4 = document.querySelector('#def-4').value;
    let t5 = document.querySelector('#term-5').value;
    let d5 = document.querySelector('#def-5').value;
    let t6 = document.querySelector('#term-6').value;
    let d6 = document.querySelector('#def-6').value;
    let t7 = document.querySelector('#term-7').value;
    let d7 = document.querySelector('#def-7').value;
    let t8 = document.querySelector('#term-8').value;
    let d8 = document.querySelector('#def-8').value;
    let t9 = document.querySelector('#term-9').value;
    let d9 = document.querySelector('#def-9').value;
    let t10 = document.querySelector('#term-10').value;
    let d10 = document.querySelector('#def-10').value;

    let deck = new Deck(title);
    deck.addFlashCard(new Flashcard(t1,d1));
    deck.addFlashCard(new Flashcard(t2,d2));
    deck.addFlashCard(new Flashcard(t3,d3));
    deck.addFlashCard(new Flashcard(t4,d4));
    deck.addFlashCard(new Flashcard(t5,d5));
    deck.addFlashCard(new Flashcard(t6,d6));
    deck.addFlashCard(new Flashcard(t7,d7));
    deck.addFlashCard(new Flashcard(t8,d8));
    deck.addFlashCard(new Flashcard(t9,d9));
    deck.addFlashCard(new Flashcard(t10,d10));

    addDeck(deck);
    console.log(dashboard);
    modal.close();

});

let dashboard = [];
let trackedDecks = [];
let favDecks = [];

function getDeck(name) {
    for (let i = 0; i < dashboard.length; i++) {
        if (name === dashboard[i].getDeckName()) {
            return dashboard[i];
        }
    }
}

function addDeck(deck) {
    dashboard.push(deck);
} 

function deleteDeck(name) {
    dashboard.splice(dashboard.indexOf(getDeck(name)),1);
}

/** Will come back to
function addCardToDeck(name, term, definition) {
    
}*/

function displayDashboard() {
    
}


let deck1 = new Deck('Deck 1');
deck1.addFlashCard(new Flashcard('Excited', 'A state of looking forward'));
deck1.addFlashCard(new Flashcard('Depressed', 'A state of numbness and lack of enjoyment'));
addDeck(deck1);

let deck2 = new Deck('Deck 2');
deck2.addFlashCard(new Flashcard('Mickey', 'A mouse'));
deck2.addFlashCard(new Flashcard('Goofy', 'A dog'));
addDeck(deck2);

deleteDeck('Deck 1');

console.log(dashboard);






