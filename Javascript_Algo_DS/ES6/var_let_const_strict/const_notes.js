// IN JS you use const for varible that can change; their scope is within the scope so you can create a const of the same name in a diffent
//scope and the one in the neares scope wiil take precedence.


function printManyTimes(str) {

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    const SENTENCE = str+ " is cool!"; // same name different scope, so this one takes precdence over the previous const variable.
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");


// CONST think of it as constant pointer not constant type; a const in ES6 is a constant pointer to a mutable array;
// So you cannot change to what it's pointing (re declaring const s = [2] to s=[3]) but you can change the value of the pointed array and objects'
//likewise const s = [2]; s[0] = 3. So now the arry is [3]
// this only work with const array, objects and fucntions, not primative like ints, string, booleans.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s[0]=2;
  s[1]=5;
  s[2]=7;

  // Only change code above this line
}
editInPlace();


// So now a constant variable to a constant object
const obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
//a constant that varible obj that pointes to  mutable object is now a constant variable that points to a constant object. using Object.freeze();


