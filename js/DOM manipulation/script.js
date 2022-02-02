

import * as DOM from './dom.js'

'use strict';
// task 9

    // ex1)
    window.onload = function(){
     const head = document.createElement('h1');   
    const y = document.createTextNode("This just got added");
    head.appendChild(y); // add text as last child
    document.body.append(head) // adds latest head as last body child


    }





    // ex2)
    function domManip (n) {
     n.innerHTML = "Hello there"; // practise see if this works
    }   
    domManip(DOM.head1);