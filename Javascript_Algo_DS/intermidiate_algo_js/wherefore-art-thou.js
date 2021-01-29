function whatIsInAName(collection, source) {
  var arr = [];
  const keys = Object.keys(source)
  // Only change code below this line
  arr = collection.filter( elem => {
    return keys.every(key => {
      return elem.hasOwnProperty(key) && elem[key]==source[key]
    })
  })

  // Only change code above this line

  console.log(keys);
  return arr;
}


function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter(elem => {
   return Object.keys(source)
    .map(key => elem.hasOwnProperty(key)&& elem[key]===source[key])
    .reduce((accum, curr) => accum&&curr);
  });

  // Only change code above this line
  return arr;
}

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  for(let elem in collection){
    let flag = true;
    for(let key in source){
      if(!(collection[elem].hasOwnProperty(key) && collection[elem][key]===source[key])){
        flag = false;
      }
    }

    if(flag)
      arr.push(collection[elem]);
  }

  // Only change code above this line
  return arr;
}
