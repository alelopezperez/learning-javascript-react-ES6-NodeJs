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


