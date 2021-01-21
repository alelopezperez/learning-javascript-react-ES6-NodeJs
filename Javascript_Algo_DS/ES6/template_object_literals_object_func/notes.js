const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.


 // ${a + b} is valid
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const  pre = '<li class="text-warning">';
  const post = '</li>';
  const failureItems = [];
  for(let i = 0; i<arr.length; i++){
    failureItems.push(`${pre}${arr[i]}${post}`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);


//Objects Literals

// syntactic sugar for returning an object.
const createPerson = (name, age, gender) => (
  // Only change code below this line
  {
    name,
    age,
    gender
  }

  // Only change code above this line
);



//Functions In an Object
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
