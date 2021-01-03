// Type Of
//JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol

//syntax
// typeof something
//something literal or a variable
let seven = 7;
let three = "3";
console.log(seven + three);


console.log(typeof seven);//number
console.log(typeof (three));//string
console.log(typeof (seven + three));//string
//adding a string and number appends in string style

// When misspelling it will intrepe it as an object that does not exist

/// You can store function in a variable in js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
