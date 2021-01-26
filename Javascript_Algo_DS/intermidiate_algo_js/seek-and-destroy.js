function destroyer(arr, ...des) {
  return arr.filter(elem => des.indexOf(elem) === 0-1)
}
function what(arr){
  console.log(arguments);
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
what([1, 2, 3, 1, 2, 3], 2, 3)

//what prints { '0': [ 1, 2, 3, 1, 2, 3 ], '1': 2, '2': 3 }
//Arguments is a special keyword in js that has an array on any; belonging to the passed arguments
