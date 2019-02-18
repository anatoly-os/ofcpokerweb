const SuitesEnum = {
    1 : {name: "Spades", shortName: "s"},
    2 : {name: "Hearts", shortName: "h"},
    3 : {name: "Diamonds", shortName: "d"},
    4 : {name: "Clubs", shortName: "c"}
};

const ValuesEnum = {
    1 : {name: "Ace", shortName: "A"},
    2 : {name: "Deuce", shortName: "2"},
    3 : {name: "Three", shortName: "3"},
    4 : {name: "Four", shortName: "4"},
    5 : {name: "Five", shortName: "5"},
    6 : {name: "Six", shortName: "6"},
    7 : {name: "Seven", shortName: "7"},
    8 : {name: "Eight", shortName: "8"},
    9 : {name: "Nine", shortName: "9"},
    10 : {name: "Ten", shortName: "T"},
    11 : {name: "Jack", shortName: "J"},
    12 : {name: "Queen", shortName: "Q"},
    13 : {name: "King", shortName: "K"}
};

export class Card {
    constructor(val, sui) {
        this.value = val;
        this.suite = sui;
    };

    name() {
        return ValuesEnum[this.value].shortName + SuitesEnum[this.suite].shortName;
    };

    longName() {
        return ValuesEnum[this.value].name + " of " + SuitesEnum[this.suite].name;
    };
};

function shuffle(array) {
    //https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

export class CardDeck
{
    constructor() {
        console.log('constructing CardDeck!');
        this.cards = [];
        for (let val in ValuesEnum) {
            for (let suite in SuitesEnum) {
                const card = new Card(val, suite);
                this.cards.push(card);
            }
        }
        shuffle(this.cards);
    };

    dealCards(numOfCardsToDeal) {
        if (this.cards.length > 2) {
            const temp = this.cards.splice(0, 3);
            return temp;
        }
    }
};