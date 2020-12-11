// This is how to create a simple object like making a variable equal an object on the spot like an anonymous object


//properties are stored as string (like a json maybe???)
// properties or the values name can be numbers and non-spaced names without qoutes	 in javascript like this
//javascript typecast at the end all the values.

var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};



// To acces this values you can use a dot (.) or square brackets []
// for brackets you need to use the string, if the properties is a number you can use the number (thanks to nonstring == maybe??)

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats",
  5 : "three"
};
//you cannot use string with dot notation

testObj.5
testObj['5']
testObj[5]

//obously if you have a propiertes that has a space in the name you cannot use dot notatio, use square brackets with a string

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};



var entreeValue = testObj['an entree'];   // Change this line
var drinkValue = testObj['the drink'];    // Change this line

// You can  also use a variable with the string value of the name of the properties in square bracket notation

// in dot notation it is assume that after the dot is the name of the property you cannot use a variable that holds the name of the property;
// an dot notation only works with string property names; not with numbers

// Changing the value of a object is easy

testObj.hat = "something else, could be a varible" 

/// TO add a new property to an object is the same as adding a new key,value to a umap. 
// if you dont intialize it it will not be added
testObj.newProp = "new property"


// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark;
for( var prop in myDog)
  console.log(prop);

 myDog.bark = 'woof';
 for( var prop in myDog)
  console.log(prop);




// DELETE property from obj
delete testObj.bark;
//or
delete testObj['bark']

/// AN object works like a dictionary 


//Checking if the object has a prperty

testObj.hasOwnProperty(variable);
test.hasOwnProperty('string');

// Array Of Objects, I think that you can have an Object with the property that contains another object.

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }

];
console.log(myMusic[1]);

//Nested Objects
//Easy Peasy
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box'];

console.log(gloveBoxContents);








