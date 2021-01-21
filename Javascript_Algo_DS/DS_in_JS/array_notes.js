// Arrys in JS can contain booleans, arrays, strings, and numbers, among other valid JavaScript Object

// {} for objects
// [] for arrayss

/* Add Items
	push() and unshift()
	
push at the end
unshift at the beginning

push and unshift can recevve more than one argument. goes from left to right the insertion
*/

arr.push(7,'VIII', 9);
arr.unshift('I', 2, 'three');

//[ 'I', 2, 'three','IV', 5, 'six', 7, 'VIII', 9]



/* Remove Items
	pop() and shift()
	
pop at the end
shift at the beginning
only allows an array to be modified by a single element at a time.
pop and shift returns the values of the removed elements.
*/

function popShift(arr) {
  let popped = arr.pop(); //challenge
  let shifted = arr.shift(); //complete
  return [shifted, popped];// [challenge,complete]
}

/* Remove Items
	splice()
- First Argument Index of the begning
- Amount of elemnt to be removed including the begenning
- It Returns the removed elements.
*/	

const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(4);// Only one argument it will keep until it reaches the final element.
arr.splice(0,1);
console.log(arr);
//[4, 5, 1]


/* Add Elements
	splice()
	
The Third element an onward it's to add any item from the beggining index argument(1st arguemnt).

*/

function htmlColorNames(arr) {
  arr.splice(0,2, 'DarkSalmon','BlanchedAlmond');
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

/* Copy Elements
	slice()
	
slice will take only two arguments intial pos(inclusive), and ending post (exclusive) and copy it to a new array and return it.
it will leave the original array unmodified(functional programming)
*/

function forecast(arr) {  
  return arr.slice(2,4);
}
//if you dont specify the second argument it will continue right until the the last element
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); //[warm, sunny]


/* Copy Elements
	spread operator
	takes an array an breaks it down to its element so it can be copied
	it can be used inside the creation of an array

*/
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    let newArr1= [...arr];
    num--;
    newArr.push(newArr1);
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; 
  let sentence = ['learning', [...fragment], 'is', 'fun']; 
  return sentence;
}

console.log(spreadOut());


/* Search Elements in an Array

	indexOf();
	it's only the first instance.
*/

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists

























