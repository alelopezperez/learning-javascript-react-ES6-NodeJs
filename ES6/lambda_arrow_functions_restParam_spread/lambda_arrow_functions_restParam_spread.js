const magic = () => { return new Date(); };


console.log(magic);

//When there is no function body, and only a return value, 
//arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. 
//This helps simplify smaller functions into one-line statements:
// one line without return should not have curly braces
const myFunc = () => "value";
const magic = () =>  new Date(); ;



const myConcat = (arr1, arr2) => arr1.concat(arr2);
const myConcat = (arr1, arr2) => {return arr1.concat(arr2);};

console.log(myConcat([1, 2], [3, 4, 5]));

// Arrowe Function can have default value for parameters like C++

const increment = (number, value=1) => number + value;


/// rest parameter.

// If you pass N number of parameter in an function, you can use (...args), it will put any arguments inside of an array. like the main(int arg, char** args) in c and C++

const sum = (...args) => {

  return args.reduce((a, b) => a + b, 0);
}


console.log(sum(1,2,3));


//Spread an array 
// when you do ...arr it will separate or decouble the values of an array, when you pass it as an argument it will spead it for a rest paramenter in a function
// This example explain it best
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}


let arr = [1,2,3,4];
console.log(sum(...arr));

// to do it for value you have to do it in array literals 
arr2 = [...arr1];

//this is an error
const spreaded = ...arr;// eror
