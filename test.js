// function simpleScorer(word) {
//     word  = word.toUpperCase;
//     let pointValue = 0;
//     for (i = 0; i < word.length; i++) {
//      pointValue += 1;
//     }
//     return pointValue;
//   };
//   console.log("My Points " + simpleScorer("grunga"));

let word = "MATTHEW";
let points = 0;
let vowels = ['A','E','I','O','U']
for (i = 0; i < word.length; i++) {
    console.log(word[i]);
if (vowels.includes(word[i])){
    points += 3;
 } else {
    points += 1;
 }
}
console.log(points);
