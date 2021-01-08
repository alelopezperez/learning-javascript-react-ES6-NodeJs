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
