
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

// task7
// #ex1)

function sub(a, b) {
    return b-a;
}
console.log(sub(12, 22));

console.log(" ");
// #ex2) 
let person = {
    "name":"felix",
    "lastName": "Cited",
    "age": 20,
    "gender": "male",
};
function welcome(name, lastName, age, gender) {
    return `My name is ${name} ${lastName}, i am ${age} years old and of gender ${gender}`
}
console.log(welcome(person.name,person.lastName, person.age, person.gender));

// #ex3) 
// function powerEx (n1, n2) {
//     return Math.pow(n1, n2)
// }
console.log(" "); 

let powerEx = (n1,n2) => Math.pow(n1, n2);

console.log(powerEx(2,4));
