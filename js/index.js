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

console.log(" "); // space in my web console

//  QA iteration exercise 1-5
// 1)

for (let aa = 100; aa <= 201; aa++) {
   
    console.log(aa);
    
}

console.log(" "); // space in my web console

// 2)

for (let bb = 100; bb <= 201; bb++) {
   
   if (bb % 2 == 0) {
       console.log("- multiple of 2");
   }
   else {
       console.log(" * not a multiple of 2");
   }
    
}

console.log(" "); // space in my web console

// or //(q4)

let bbb = 100
while (bbb <= 200) {
    if (bbb % 2 == 0) {
        console.log("- multiple of 2");
    }
    else {
        console.log(" * not a multiple of 2");
    }

    bbb++; 
}

// q3)
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < nums.length; i++) {

    for (let j = 0; j < nums.length; j++) {
        console.log(nums[j]);;
        
    }
    
}


//q4 (see above)


//q5 (see above)

let today = new Date(); 
let day = today.getDay();
switch (day) {
  case 0:
    console.log(`Sunday`);
    break;
  case 1:
    console.log(`Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`Weekday`);
    break;
    case 6:
        console.log(`Saturday`);
        break;
  default:
    console.log(`day not found`);
    break;
}