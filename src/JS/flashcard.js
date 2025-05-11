
export default class flashcard {
    constructor(term, definition) {
        this.term = term;
        this.definition = definition;
        this.cardId = this.uuidv4;
    }

    getTerm() {
        return this.term;
    }

    setTerm(newTerm) {
        this.term = this.newTerm;
    }

    getDef() {
        return this.definition;
    }

    setDefinition(newDef) {
        this.definition = newDef;
    }

    uuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
    }
}