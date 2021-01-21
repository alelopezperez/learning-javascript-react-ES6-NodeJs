function countdown(n){
  

  if (n <= 0)
    return [];

  var arr = countdown(n-1);
  arr.unshift(n);
  


  return arr;
}
// Only change code above this line
console.log(countdown(10));
