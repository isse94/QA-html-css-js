`use strict`
import * as DOM from './calDom.js';

// DOM.clear.onclick = function () {
//     console.log(" cleared data");
// } // clear data on click //example

console.log(DOM.buttonsJS.innerText="hello");

// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
//// apply a click event listener to every button in our array
DOM.buttonsJS.map( button => {
    button.addEventListener('click', (e) => {
    console.log('clicked');
    console.log(e);// indentifies which button was clicked
    console.log(e.target);
    console.log(e.target.innerText); // take different actions based on it
    
    
    });
    });