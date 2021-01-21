/* Basic Algorithm
	
*/
let num = Number.MIN_SAFE_INTEGER;

// Str ends with target string
function confirmEnding(str, target) {
  let end = (str.slice(str.length-target.length));

  return end == target;
}

console.log(confirmEnding("Bastian", "n"));

//Truncate
//string are kind  of immutable
function truncateString(str, num) {
  if(str.length <= num)
    return str;

  return str.slice(0,num)+'...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// Returning Undefined
function findElement(arr, func) {
  
  for(let i = 0; i<arr.length; i++){
    if(func(arr[i]))
      return arr[i];
  }
  return undefined;
  
  
}


// Using typeof
function booWho(bool) {
  return typeof bool == 'boolean'
}

booWho(null);

//Regex and Replace
function titleCase(str) {
 
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));


// Splice by deleting 0;
function frankenSplice(arr1, arr2, n) {
  let ans = arr2.slice();
  ans.splice(n,0,...arr1.slice(0));
  return ans;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); 



// Falsy values return false 

function bouncer(arr) {
  let ans = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i])
       ans.push(arr[i]);
       
  }
  return ans;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// Find position

function getIndexToIns(arr, num) {
  let ans = 0;
  for(let i = 0; i<arr.length; i++){
    if(num<=arr[i])
      ans++
  }
  return arr.length - ans;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));

//Set in js

function mutation(arr) {
  let seto = new Set();
  for(let i = 0; i<arr[0].length;i++){

    seto.add(arr[0][i].toLowerCase());
  }

  for(let j = 0; j<arr[1].length;j++){
    
    if(!seto.has(arr[1][j].toLowerCase()))
      return false;
   
  }
  return true;
}

console.log(mutation(["hello", "hell"]));





