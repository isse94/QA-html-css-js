'use strict';


// ex1)
let firstName = "Isse";
let secondName = "Isse2";
let fromLoc ="London";
let stars = "Stars"

console.log(firstName);
console.log(secondName);
console.log(fromLoc);
console.log(stars);

// ex2)
let favCar = "BMW";
let model = "X6 SERIES"

console.log("my fav car is: " + favCar + " and the model is " + model);

//ex3)
console.log(` %c my fav car is: ${favCar} and the model is  ${model}` ,"color: orange;font-family:fantasy; font-style: Bold; background-color: black; padding: 10px");


// task2 ex4a)
let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

// ex4a)
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;
// `The total bill is £4000 the remaining amount of money to be paid is £1652`
console.log(`The total bill is ${totalMoney} the remaining amount of money to be paid is ${totalMoney - moneyPaidSoFar}`);
//OR 
console.log(`The total bill is ${totalMoney} the remaining amount of money to be paid is ${totalLeftToPay}`);
