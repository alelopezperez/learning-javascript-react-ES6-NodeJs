/* Key Value Pairs in JavaScript Objects
	
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};


foods.bananas=13;
foods['grapes']=35;
foods["strawberries"]=27;


console.log(foods);

//Nested Objects
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

//Chaging an object
userActivity.data.online=45;
userActivity.data=45;//now object is a value not another object


console.log(userActivity);

/*
	Objects Using Bracket Notation
*/
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));


/*Delete Properties of an Obejct (the property can be another object)
	delete object.property;

*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
  ale : {
      delethis:"yes"
  }
};
delete foods.oranges;
delete foods["plums"];
delete foods["strawberries"];
delete foods["ale"]["delethis"];
delete foods["ale"];
console.log(foods);

/* Verifying Existance of a Property in an Obeject
	object.hasOwnProperty('key');
	'key' in object
*/

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  return obj.hasOwnProperty('Alan') &&
  'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj;
}

console.log(isEveryoneHere(users));


/* Iterate Through An Object
	-for each statament 
	for(let key in ob){
	}
	for(const key in ob){
	}
	for(var key in ob){
	}

*/

function countOnline(usersObj) {
  // Only change code below this line
  let num = 0;
  for(const user in usersObj){
    if(usersObj[user].online)
      num++;
  }
  return num;
  // Only change code above this line
}




















