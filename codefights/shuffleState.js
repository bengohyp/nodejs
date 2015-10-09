/*
Determine the state of a deck of cards after the given number of riffle shuffles.
You are given an array of 2 * n cards representing the initial state of the cards from top to bottom, and a number of shuffles to perform over this deck.
Assume that every shuffle is done perfectly starting with the lower half of the cards.
Shuffle examples:
[1,2,3,4] => divide in halves [1,2],[3,4] => combine [1,3,2,4]
The second shuffle:
[1,3,2,4] => divide in halves [1,3],[2,4] => combine [1,2,3,4]
2 <= |deck| <= 100
deck is always even
1 <= deck[i] <= 9
0 <= numberOfRiffleShuffles <= 100
*/

function shuffleState(deck, numberOfRiffleShuffles) {
	if (numberOfRiffleShuffles === 0) return deck; //return deck if numberOfRiffleShuffles = 0
	var shuffledDeck = deck;
	for (var i = 0; i < numberOfRiffleShuffles; i++) { //loop depending on numberOfRiffleShuffles
		//for 1 riffle shuffle, split deck to 2 arrays
		var leftHandDeck = shuffledDeck.slice(0,(shuffledDeck.length / 2)); //leftHandDeck = deck[0] to deck[(deck.length / 2) - 1] use slice
		var rightHandDeck = shuffledDeck.slice(shuffledDeck.length / 2, shuffledDeck.length); //rightHandDeck = deck[deck/length / 2] to deck[deck.length - 1] use slice
		shuffledDeck = []; //clear shuffledDeck
		for (var j = 0; j < rightHandDeck.length; j++) {
			shuffledDeck.push(leftHandDeck[j]);	
			shuffledDeck.push(rightHandDeck[j]);
		} //shuffledDeck = lefthand[0], rightHand[0], leftHand[1], rightHand[1] until rightHand[rightHand.length]
	}
	return shuffledDeck;
}

function generateRandomArray(length) {
	var array = [];
	for (var i = 0; i < length; i++) {
		array.push(Math.floor(Math.random() * 9) + 1);
	}
	return array;
}

var randomArray = generateRandomArray(100);
//console.log(shuffleState([1,2,3,4], 2));
//console.log(shuffleState([3,4,7,3,4,6,4,2,2,3,4,5,7,8,9,5,4,3,3,5,6,7,8,8,6,5,4,3,5,6,7,8,5,6,3,5,7,8], 17));
console.log(shuffleState(randomArray, 100));