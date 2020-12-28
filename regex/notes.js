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
let petRegex = /dog|cat|bird|fish/; 
let errRegex = /dog | cat | bird | fish/; 
let result = petRegex.test(petString);

// Ignore cases with the i flag

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

// Now if you want to get the match you need to use the function match on the string that recieves a regex. not the regex
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; 
let result = extractStr.match(codingRegex); 

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
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);



// Character Class

// The character class is the indermidiate between wildcard an literals.
//[arb] this means that it will only match these characters

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); 
bagStr.match(bgRegex); 
bugStr.match(bgRegex);
bogStr.match(bgRegex); 

let bgRegex = /[a-e]at/;

// Character class 

// if you want to go in order inside throu letter you can just specify the startin pos and ending pos

// You can do the character clas with number
// e,g [4-6] and also combine it inside
// like this [a-t2-5]

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 


// negated character set

// using inside the character class the -
// if you put ^  at after opening tha charaacter/numer class ([) all the stuff inside of it will be negated
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex); 


// Regex in compiler class also known as + this means one or more
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; 
let result = difficultSpelling.match(myRegex);

console.log(result)



// Using * this means zero or more instead of one or more


let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex); 

//Lazy Match
//By default regex will return the maximum substring that fits the regex. like when using * or +.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z]+?[0-9]+?>/; 
let result = text.match(myRegex);

console.log(result);


// TEST

let reCriminals = /C+/; // Change this line


// The Caret Character
// Ourside of a character class it specifies; that the regex needs to be found as the firt subsstring position 0
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);


// The Dolla Sign
// Always Outisde of a character class?? it specifies that the matchin regex should be the last one in the string.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// [A-Za-z0-9_] =\w

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;


console.log(result)

// \W =[^A-Za-z0-9_] capiltar W
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result)


// \d = [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

console.log(result);

// \D =[^0-9]


let username = "z5";
let userCheck = /^[a-z][a-z]+[0-9]*$|^[a-z][0-9][0-9]+$/i;
let result = userCheck.test(username);

console.log(result)




