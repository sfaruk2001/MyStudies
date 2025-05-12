

export default class Deck {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.deckId = this.uuidv4();
    }

    getDeckName() {
        return this.name;
    }

    setDeckName(deckName) {
        this.name = deckName;
    }

    getCards() {
        return this.cards;
    }

    addFlashCard(newCard) {
        this.cards.push(newCard);
    }

    getFlashCard(cardId) {
        for (let i = 0; i < this.cards.length; i++) {
            if (cardId === this.cards[i].getId()) {
                return this.cards[i];
            }
        }
    }

    getDeckId() {
        return this.deckId;
    }

    uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
    }



}