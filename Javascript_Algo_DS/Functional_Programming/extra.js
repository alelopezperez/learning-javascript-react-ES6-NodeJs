

//Every Method
//The Every method return true if the callbacks return true for all the elements of the array

function checkPositive(arr) {
  // Only change code below this line
  return arr.every(elem => elem>0);

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

//Some Method
//The Every method return true if the callbacks return true for all the elements of the array

function checkPositive(arr) {
  // Only change code below this line
  return arr.some(elem => elem>0)
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);


//Arrity of a Func is the number of parameters
// Currying a function means to convert a function of N arity into N functions of arity 1.
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
//Why to Use IT to hold a func while getting the next value
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3


//Partial Aplication TO hold out a function

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13



// MY Curryin Func
function add(x) {
  // Only change code below this line
  return (y) => (z) => x+y+z;
  // Only change code above this line
}
add(10)(20)(30);
