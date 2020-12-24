// How to Create a regex
// You need to first create a regex variable (wth let or const or var)
// the structure of a regex varible is varname = /somethinhere/

//now the regex varible has a func called test that return true if the regex is in the parameter.


let myString = "Hello, World!";
const myRegex = /Hello/;
const otherRegex = /hello/;
let result = myRegex.test(myString); //return true;
otherRegex.test(myString); //return false


// my regex with /Hello/ will try to find a literal matching word in the string mystring
// since it's a literal match its case sensative


// Multiple Literal Matching WITH OR
//you can alternate literal matchin with OR | 

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let errRegex = /dog | cat | bird | fish/; // Error because of the whitespace is read as an character
let result = petRegex.test(petString);

// Ignore cases with the i flag

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

// Now if you want to get the match you need to use the function match on the string that recieves a regex. not the regex
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log(result[0]);

// The GROUP flag
// The g flags return all the instances of the regex not just the first.
// you can combine it with whitespace
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /tWinkle/ig; 
let result = twinkleStar.match(starRegex); 

console.log(result)



/// Wildcard Regex
// This is just the when you use the dot, as a wildcard, that means that it coul mean any on character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // to match run fun 
let result = unRegex.test(exampleStr);



// Character Class

// The character class is the indermidiate between wildcard an literals.
//[arb] this means that it will only match these characters

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null


// Character class 

// if you want to go in order inside throu letter you can just specify the startin pos and ending pos
// using inside the character class the -

let bgRegex = /[a-e]at/;
