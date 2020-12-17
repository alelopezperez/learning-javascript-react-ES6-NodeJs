const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// This is how you do a  destructure asssigment, it needs to have the same name; of the properties of an object.
const {today, tomorrow} = HIGH_TEMPERATURES;


const {today : highToday, tomorrow : highTomorrow} = HIGH_TEMPERATURES 
//If you want to use different variable name; use this version of destructuring for it.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};


//Not creating variable with different name but destructuring the nested object
const { today : {low, high}} = LOCAL_FORECAST
// Change varible name with nested objects
const { today : { low : lowToday, high : highToday }} = LOCAL_FORECAST;

//Destructuring an Array an assigments.

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5



let a = 8, b = 6;
// Only change code below this line

[a,b] = [b,a]


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  
  const[,,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);


// Destructiring inside function arguments
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line


