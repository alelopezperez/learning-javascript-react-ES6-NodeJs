/*
 if you use let it will no let re-declare the variable
 	let ale = 10;
 	let ale = "gola"
 	var ale = "10" 
 	you cannot do that.
 	
  you can do that with var. (weird)
	  
	  	
	let ale = 10;
	ale = "go";
	this is okay
	
	
  
*/
"use strict";
//this will make it that you cannot declare variable without let or var 

for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}

//Up here var is created outside of the for loop like  this down here:
var i;
for (i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}

// but it's scope is still the block if it was inside of a function. with let, is like in normal languages like c++


"use strict";
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

checkScope();

// Up here you can re-declare the same variable name with let but in diferent scope delimited by the curly braces {  }


