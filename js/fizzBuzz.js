'use strict';



// for (let i = 1; i <= 100; i++) {

//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`FizzBuzz ${i}`);
//   }
//   if (i % 3 == 0) {
//     console.log(`Fizz ${i}`);
//   }
//   else if (i % 5 == 0) {
//     console.log(`Buzz ${i}`);
//   }
//   else {
//     continue;
//   }
//     }

// fizBuzz shorten with ternary operators
    for (let i = 1; i <= 100; i++) {

      (i % 3 == 0 && i % 5 == 0) ? console.log(`FizzBuzz ${i}`):
      (i % 3 == 0 ) ? console.log(`Fizz ${i}`):
      (i % 5 == 0) ? console.log(`Buzz ${i}`): " "
       
    }