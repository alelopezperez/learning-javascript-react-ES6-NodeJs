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


/* Prototype Multi-Add
	To add more than prototype to a "class" "constructor??"
	It's needed to add them as an object.
*/


function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs : 2,
  eat : () => {return "eat func";},
  describe : () => {return "desc func";}
};

/* Adding Protoype Side Effects;
	Adding protoype to an object like i've done
	Destroys the obj.constructor the constructor property
*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
let cat = new Dog("cat");
console.log(cat.constructor === Dog) //true

Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  },
};

cat = new Dog("cat");
console.log(cat.constructor === Dog) //false
console.log(cat instanceof  Dog) // true.

function Dog(name) {
  this.name = name;
}

// Only change code below this line
let cat = new Dog("cat");
console.log(cat.constructor === Dog) //true

Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  },
  constructor: Dog
};

cat = new Dog("cat");
console.log(cat.constructor === Dog) //true


/* Objects isPrototypeOf

var human = {mortal: true}
var socrates = Object.create(human);
human.isPrototypeOf(socrates); //=> true
socrates instanceof human; //=> ERROR!

*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));


/* Object is the superclass of all created objects


*/


function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
console.log(Object.prototype.isPrototypeOf(Dog.prototype));


/* Inheritance Objects Parent classes superclass
 	When using Object.create(Animal.prototype);
 	the result object will be empty.

*/
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  
};

function Animal() { }	

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype); ; // Change this line
let beagle = Object.create(Animal.prototype); // Change this line



let duck = Object.create(Animal.prototype); ; // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
let animal = Object.create(Animal.prototype);
beagle.eat();



/* Full Inheritance And Fixing the constructor Function.
*/

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();

beagle.eat();

console.log(beagle.constructor) //Animal

console.log(beagle instanceof Animal) //True

console.log(beagle instanceof Dog) //True


beagle.constructor = Dog;

// Doing Everything Together
// Remmber that till now you cannot use the multi add inhereting from Animal.

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = ()=>{console.log("Woof!")}


let beagle = new Dog();
beagle.bark()
beagle.eat();


/* Override Inherited Methods

	after doing everythin you did before you can override a property for a specific child 
	by just readding it.
	
	obj.prototype.ovewrittenprop = anyhingYouWAnt;

*/

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = ()=>{return "Alas, this is a flightless bird."};


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());


/*
	Function That Add Props to unrelated objects, so no inheritance
*/

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

bird.prototype = {
  gli : () => {console.log("Woo");}
}
function glideMixin(obj){
  obj.glide = () => {console.log("Woo");}
}

glideMixin(bird);
glideMixin(boat);



/* Private Variables in Objects

*/

function Bird() {
  let weight = 15; //private
  this.getWeight = ()=> { return weight;} //cant use this.weight
  this.age = 15;


}

let bird = new Bird();
console.log(bird);
console.log(bird.getWeight())

/* Immediately Call a Func 
	(somethiFUnc)();

*/
(function makeNest() {
  console.log("A cozy nest is ready");
})();

(function () {
  console.log("A cozy nest is ready");
})();


( () => {console.log("A cozy nest is ready");}
)();

//Werid Mixin and Immediate


let funModule = ( () => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => { true; };
    },
    singMixin: (obj) => {
      obj.sing = () => { console.log("Singing to an awesome tune"); }
    }

  }
})();










