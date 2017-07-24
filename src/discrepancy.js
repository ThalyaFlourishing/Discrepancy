/* DISCREPANCY

  var queen = String.fromCodePoint(9819);
 25A0
 25A1

*/

const A = String.fromCodePoint(9632);
const B = String.fromCodePoint(9633);

const startingDeck = [A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,];

function displayUnshuffled() {

  let outputString = '';
  let len = startingDeck.length;

  for (let i = 0; i < len; i++) {
    outputString += (startingDeck[i]);
  }
  console.log(outputString);
}


function displayShuffled() {

  let outputString = '';
  let workingDeck = startingDeck.slice();
  workingDeck = shuffle(workingDeck);
  let len = workingDeck.length;
  
  for (let i = 0; i < len; i++) {
    outputString += (workingDeck[i]);
  }
  console.log(outputString);
}


function shuffle(inputArray) {
  
  let workingArray = inputArray.slice();
  
  workingArray.sort(function(a, b) {
    return Math.random() - Math.random();
  });
  
  return workingArray
}
