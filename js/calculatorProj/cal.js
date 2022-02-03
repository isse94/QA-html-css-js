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
    // console.log('clicked');
    // console.log(e);// indentifies which button was clicked
    // console.log(e.target);
    // console.log(e.target.innerText); // take different actions based on it
    switch (e.target.innerText) {
        case 'C':
            DOM.display.innerText = ' ';
            break;
            case '←':
                DOM.display.innerText = DOM.display.innerText.slice(0, -1); //remobe our last value of array using slice from last (-1) to index (0)
                break;
            case '=':
                DOM.display.innerText = eval(DOM.display.innerText );  // eval takes our string (our display text) as parameter and executes it as a js code
                break; // (stop the equal sign from displaying)
                // can add try{} and catch { display error message as text} to show user they've inputed an error of some sort
                default:
            DOM.display.innerText += e.target.innerText; // display what is clicked in our cal output
    }
    
    });
    });