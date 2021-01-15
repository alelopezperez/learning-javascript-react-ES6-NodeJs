/*
	Map Iterates Over the Object array etc
*/


var ratings = watchList.map( movie => {return{'title' : movie.Title, 'rating': movie.imdbRating}} );



// My Own Map Func

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for(let i = 0 ; i< this.length; i++){
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});


/*
 Filter
 Goes throught the array and creater an array with only the element which the callback function return true;

*/

var filteredList = watchList.map(movie => {return{'title':movie.Title, 'rating':movie.imdbRating}}).filter(movie => {return movie.rating>=8.0});



// My own Filter

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];

  for(let i = 0; i<this.length; i++){
    if(callback(this[i]))
      newArray.push(this[i]);
  }
  return newArray;
};




var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});



// CONCAT is immiutable
// USE CONCAT in Arrays



/* Reduce 
	Goes Thorught the array an returns one elment.
	It Has  the call back 4 parameters.
	
	-accumulator
	-current element being processed
	-index of the element
	- is the array that is being used
	In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. 
	If this second parameter is not used, 
	then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.



*/

function getRating(watchList){
  // Only change code below this line
  var averageRating;
  const info = watchList.reduce((obj, mov)=>{

    if(mov.Director == "Christopher Nolan"){
      obj.sum += parseFloat(mov.imdbRating);
      obj.total ++;
    }
    return obj
  }, {sum:0,total:0});
  console.log(info);
  // Only change code above this line
  return info.sum/info.total;
}
console.log(getRating(watchList));
console.log({sum:0,count:1});



const squareList = arr => {
  // Only change code below this line
  return arr.filter( num => num>0&& Number.isInteger(num))
  .map(num => num*num);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


// Sorting

arr.sort(); // it uses string unicode to sort by default
arr.sort((a, b) => {return a<b ? -1:1 ;}); // same as above for sort



// Weak Way of sorting

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  const neu = arr.slice();
  neu.sort();
  return neu;
  // Only change code above this line
}
nonMutatingSort(globalArray);




//Split
  return str.split(/\W/);
  
  
//Join to stringify an Array
  
  function sentensify(str) {
  // Only change code below this line
  const ans = str.split(/\W/).join(' ');
  return ans;
  // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you"));


function urlSlug(title) {
    const ans = title
    .split(/\W/)
    .filter(elem => elem !== '')
    .map(elem => elem.toLowerCase())
    .join('-');

    return ans;

}
urlSlug("Winter Is Coming");













