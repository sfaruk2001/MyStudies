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
    let dash = document.querySelector('.decks');
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
    
    if (title === '' || t1 === '' || d1 === '' || t2 === '' || d2 === '' || t3 === '' || d3 === '' || t4 === '' || d4 === '' || t5 === '' || d5 === '' || t6 === '' || d6 === '' || t7 === '' || d7 === '' || t8 === '' || d8 === '' || t9 === '' || d9 === '' || t10 === '' || d10 === '') {

    } else {
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
        dash.innerHTML = '';
        displayDashboard();
        form.reset();
        modal.close();
    }
    

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

function getDeckById(deckId) {
    for (let i = 0; i < dashboard.length; i++) {
        if (deckId === dashboard[i].getDeckId()) {
            return dashboard[i];
        }
    }
}

function addDeck(deck) {
    dashboard.push(deck);
} 

function addDeckToFav(deck) {
    favDecks.push(deck);
}

function deleteDeck(name) {
    dashboard.splice(dashboard.indexOf(getDeck(name)),1);
}

/** Will come back to
function addCardToDeck(name, term, definition) {
    
}*/

function displayDashboard() {
    for (let i = 0; i < dashboard.length; i++) {
        let dash = document.querySelector('.decks');

        let deck = document.createElement('div');
        deck.classList.add('deck');
        deck.classList.add('data-idx');
        deck.setAttribute('data-idx', i);
        deck.classList.add('deck-id');
        deck.setAttribute('deck-id',dashboard[i].getDeckId());

        let deckHead = document.createElement('div');
        deckHead.classList.add('deck-head');

        let headTitle = document.createElement('div');
        headTitle.classList.add('head-title');
        headTitle.innerText = dashboard[i].getDeckName();

        let headButtons = document.createElement('div');
        headButtons.classList.add('head-buttons');

        let trackButton = document.createElement('button');
        trackButton.classList.add('track-button');
        trackButton.innerText = 'Track';

        let closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.innerText = 'X';
        closeButton.addEventListener('click', (e) => {
            let idx = Number(e.target.parentElement.parentElement.parentElement.dataset.idx);
            dashboard.splice(idx, 1);
            dash.innerHTML = '';
            displayBulletin();
        });

        let deckFeatures = document.createElement('div');
        deckFeatures.classList.add('deck-features');

        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerText = 'Edit';

        let favButton = document.createElement('button');
        favButton.classList.add('fav');
        favButton.innerText = 'Favorite';
        /**favButton.addEventListener('click',(e)=> {

            deckId = e.target.parentElement.parentElement.getAttribute('deck-id');
            if (deckId) {
                favButton.innerText = 'Favorite';
                //if you find the deck in favs you remove it.
                dashboard.splice(,1);
            } else {
                favButton.innerText = 'Favorited';

            }
        });*/

        let games = document.createElement('div');
        games.classList.add('games');

        let quizButton = document.createElement('button');
        quizButton.classList.add('quiz');
        quizButton.innerText = 'Quiz';

        let matchButton = document.createElement('button');
        matchButton.classList.add('match');
        matchButton.innerText = 'Match';

        headButtons.appendChild(trackButton);
        headButtons.appendChild(closeButton);
        deckHead.appendChild(headTitle);
        deckHead.appendChild(headButtons);
        games.appendChild(quizButton);
        games.appendChild(matchButton);
        deckFeatures.appendChild(editButton);
        deckFeatures.appendChild(favButton);
        deckFeatures.appendChild(games);
        deck.appendChild(deckHead);
        deck.appendChild(deckFeatures);

        dash.appendChild(deck);

    }
}


console.log(dashboard);






