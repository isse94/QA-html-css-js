
'use strict';

// task6
// #ex1)

let darthVader = {
    "allegiance": "empire",
    "weapon": "lightsabre",
    "sith" : true,
};
console.log(darthVader);

// #ex2)
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);

console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

// #ex3)
let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("Welcome");
console.log(myArray.length);
myArray.shift();
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}