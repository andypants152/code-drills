// Defining the card constructor function
//
// -------------------- Your Code Here --------------------

var card = function(value) {
    this.value = value;
    this.print = function () {
        console.log(this.value);
    }
}

// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------

var deck = function(cards) {
    this.cards = cards;
    this.count = function(){
        return this.cards.length;
    }
    this.shuffle = function () {
        var m = this.cards.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
    }
    this.draw = function () {
        return this.cards.splice(0, 1)[0];
    }
    this.add = function (card) {
        this.cards.push(card);
        this.shuffle();
    }

}

// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------

module.exports = {
    Card: card,
    Deck: deck
}


// --------------------- End Code Area --------------------
