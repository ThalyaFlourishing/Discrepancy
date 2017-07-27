/* DISCREPANCY

*/

//const A = String.fromCodePoint(9632);
//const B = String.fromCodePoint(9633);

  const A = 'A';
  const B = 'B';

const startingDeck = [A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,];

var displayUnshuffled = function() {

  let outputString = '';
  let len = startingDeck.length;

  for (let i = 0; i < len; i++) {
    appendElement(startingDeck[i]);
    outputString += (startingDeck[i]);
  }
  console.log(outputString);
}


var displayShuffled = function() {

  let firstHalfRatio = 1.0;
  let secondHalfRatio = 1.0;
  let outputString = '';
  let Acount = 0;
  let Bcount = 0;

  let workingDeck = startingDeck.slice();
  workingDeck = shuffle(workingDeck);
  let len = workingDeck.length;
  let mid = Math.floor((len / 2) - 1);
  
  for (let i = 0; i < len; i++) {
    outputString += (workingDeck[i]);
    appendElement(workingDeck[i]);
    workingDeck[i] === A ? Acount++ : Bcount++;
    
    if(i === mid) {
      firstHalfRatio = Acount / Bcount; // VULNERABLE TO DIVIDING BY ZERO
      Acount = 0;
      Bcount = 0;
      if(len % 2 === 1) { i++; }; // IF DECK HAS AN ODD NUMBER OF CARDS, SKIP THE MIDDLE CARD
    } else if(i === len-1) {
      secondHalfRatio = Acount / Bcount; // VULNERABLE TO DIVIDING BY ZERO
    }
  }

  appendElement('C')

  console.log('FIRST HALF RATIO = ', firstHalfRatio, '\nSECOND HALF RATIO = ', secondHalfRatio, '\n', outputString);
}


function appendElement(inputChar) {

  var element = document.getElementById("div1");

  if(inputChar === A) {
  var blockNode = document.createElement('span');
  blockNode.className = 'green';
  element.appendChild(blockNode);
  }
  
  if(inputChar === B) {
  var blockNode = document.createElement('span');
  blockNode.className = 'red';
  element.appendChild(blockNode);
  }

  if(inputChar === 'C') {
  var blockNode = document.createElement('p');
  blockNode.className = 'break';
  element.appendChild(blockNode);
  }
}

function appendElement_OLD(inputChar) {
  
  var blockNode = document.createTextNode(inputChar);
  var element = document.getElementById("div1");

  if(inputChar === A) {
  element.appendChild(blockNode);
  }
  
  if(inputChar === B) {
  element.appendChild(blockNode);
  }

}


// IF THIS FAILS TO PRODUCE DISCREPANCY, TRY 'return a > b' INSTEAD - https://www.allenpike.com/2009/arraysort-browser-differences
function shuffle(inputArray) {
  
  let workingArray = inputArray.slice(); // IS THIS REALLY NECESSARY?
  
  workingArray.sort(function(a, b) {
    return Math.random() - Math.random();
  });
  
  return workingArray
}
