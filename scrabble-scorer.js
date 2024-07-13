// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system.


const input = require("readline-sync");

const oldPointStructure = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let playerWord = ''; 

function initialPrompt() {
   console.log("Let's play some Scrabble!"); 
  console.log('');
  playerWord = input.question("Enter a word: ");
}

let newPointStructure = transform(oldPointStructure);

let simpleScorer = function (word) {
   word = word.toUpperCase();
   let points = 0;
   for (i = 0; i < word.length; i++) {
     points += 1;
   }
   return points;
 }

let vowelBonusScorer = function (word) {
   word = word.toUpperCase();
   let points = 0;
   let vowels = ["A", "E", "I", "O", "U"];
   for (i = 0; i < word.length; i++) {
     if (vowels.includes(word[i])) {
       points += 3;
     } else {
       points += 1;
     }
   }
   return points;
 }
   
let scrabbleScorer = function(word) {
   word = word.toLowerCase();
   let points = 0;
   let keys = Object.keys(newPointStructure);
   for (let i = 0; i < word.length; i++) {
    if (keys.includes(word[i])) {
      points += newPointStructure[word[i]];
    }  
 }
  return points;
}
 let simpleScore = {
   name:"Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFunction: simpleScorer
};

let vowelBonusScore = {
   name:"Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction:vowelBonusScorer
};


let scrabbleScore = {
   name:"Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: scrabbleScorer
};

const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt() {
  console.log(`Which scoring algorithm would you like to use? :

0 - ${simpleScore.name} : ${simpleScore.description}
1 - ${vowelBonusScore.name} : ${vowelBonusScore.description}
2 - ${scrabbleScore.name} : ${scrabbleScore.description}`);
   
   let playerScorer = input.question("Enter 0, 1 or 2 : ");  



   if (playerScorer == 0) {
      return console.log("Points " + simpleScore.scorerFunction(playerWord));
   } else if (playerScorer == 1) {
      return console.log("Points " + vowelBonusScore.scorerFunction(playerWord));
   } else if (playerScorer == 2) {
      return console.log("Points " + scrabbleScore.scorerFunction(playerWord));
   }
}

function transform(object) {
  let newObject = {};
  for (points in object) {
    for (i = 0; i < object[points].length; i++) {
      if (
        object[points].includes(
          "A",
          "E",
          "I",
          "O",
          "U",
          "L",
          "N",
          "R",
          "S",
          "T",
        )
      ) {
        newObject[object[points][i].toLowerCase()] = 1;
      } else if (object[points].includes("D", "G")) {
        newObject[object[points][i].toLowerCase()] = 2;
      } else if (object[points].includes("B", "C", "M", "P")) {
        newObject[object[points][i].toLowerCase()] = 3;
      } else if (object[points].includes("F", "H", "V", "W", "Y")) {
        newObject[object[points][i].toLowerCase()] = 4;
      } else if (object[points].includes("K")) {
        newObject[object[points][i].toLowerCase()] = 5;
      } else if (object[points].includes("J", "X")) {
        newObject[object[points][i].toLowerCase()] = 8;
      } else if (object[points].includes("Q", "Z")) {
        newObject[object[points][i].toLowerCase()] = 10;
      }
    }
  }
  return newObject;
}

function runProgram() {
  initialPrompt();
  scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt,
};
