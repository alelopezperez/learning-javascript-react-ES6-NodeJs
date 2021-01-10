/* Basic Objects Creation
	let obj - {
		property1 : value,
		property2 : value,
		
	}
	
	Access Object's properties via dot notation
	obj.nameofthepropertyNoSPaces
	
*/

let dog = {
    name: "Dogie",
    numLegs: 6

};

console.log(dog.name);
console.log(dog.numLegs);


/* Basic Objects Methods
	like objects in other langues, in JS 
	you can have object with methods.
	
*/
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: () => {return "This dog has "+dog.numLegs+" legs.";}
  sayLegs: function() {return "This dog has "+dog.numLegs+" legs.";}

};

console.log(dog.sayLegs());



/* Basic Objects This

	In the current context, this refers to the object that the method is associated with
*/

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: () => {return "This dog has "+ this.numLegs+" legs.";}
  sayLegs: function() {return "This dog has "+ this.numLegs+" legs.";}

};

/* Basic Objects Constructor Function

	In the current context, this refers to the object that the method is associated with
	
	it need the this keyword to create the object's properties from scratch
	
	Using the word new makes sense for the this keyword to create a new object
*/

function dog(){
    this.name = "ale";
    this.color = "black";
    this.numLegs = 4;
}

console.log(new dog());


/* Baisc Object Constructor Function
	
	Passing argument when creating the constructor and object
*/
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("klk", "blue");

/* Basic Objects Constructor InstanceOf
	
	If you use instance of on a empty objects
	let obj = {
	};
	it will not work

*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

let myHouse = new House(5);
console.log(typeof myHouse);
myHouse instanceof House




/* Basic Objects Own Properties
	
	The Properties stated in a constructor are Own Properties when a object is created throught the constructor
	or a class. anonymouse object already are created object so they are already own properties

*/
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for(let prop in Bird) {//nothing
 }

for(let prop in canary){
  console.log(prop);
  ownProps.push(prop);
}

let own = {
  nani : "a",
  theF : 2,
}
for(let prop in own){
  console.log(prop);
  ownProps.push(prop);
}


/* Basic Objects Prototype Properties

	Prototype is a type of properties which value is shared
	across every created instance of objects.
	
	Is not a Own property and when doing a console.log it does not appear the prototype



How to make a prototype We use the class name or constructor name not the instance created from them.
	Class.prototype.name = value

*/
function Dog(name) {
  this.name = name;
}



let beagle = new Dog("Snoopy");
Dog.prototype['numLegs']=5;
Dog.prototype.numLegs=5;

console.log(beagle.numLegs);



function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

console.log(beagle);

for(let prop in beagle){
  console.log(prop);
  if(beagle.hasOwnProperty(prop))
    ownProps.push(prop);
  else
    prototypeProps.push(prop)
}	




/* Basic Objects Constructor Properties

	obj.constructor is properties of a created object
	that references the constructor function that was used to create said object.
	
	if you do obj.constructor(value), it will recreaate the object

*/






function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog
}

let dog = new Dog('a');

let neuDog = dog.constructor("b");

console.log(dog); //{name:"b"}
console.log(neuDog); //undefined
















