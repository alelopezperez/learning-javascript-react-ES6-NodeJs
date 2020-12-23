//In order to share it with functions with other files, you first need to export it.

export const add = (x, y) => {
  return x + y;
}
//or
const add = (x, y) => {
  return x + y;
}
export { add, subtract };

// now this functions could be used when imported

//this is when you want to use your exported functions.
import {lowercaseString, uppercaseString} from './string_functions.js'
uppercaseString("hello");
lowercaseString("WORLD!");

// Importing everything and give the import an alias.
import * as stringFunctions from './string_functions.js';
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//Export Default
//NO NAME; ANONYMOUS to be exported as default
//Since export default is used to declare a fallback value for a module or file, 
// ONE DEFAULT EXPROT per file or module
//Additionally, you cannot use export default with var, let, or const

export default function (x, y) {
  return x - y;
}

//How to import default export.

//This is without the curly braces of an import; so when we do 
import subtract from "./math_functions.js"; 
// we are giving a name to the nameless defualt export
