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
