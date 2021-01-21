// case values are tested with strict equality (===)

// You can have a switch statement with different types like string a then number

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "a":
      console.log("apple");
      answer = "apple";
      break;
    case "b":
      console.log("bird");
      answer = "bird";
      break;
    case "c":
      console.log("cat");
      answer = "cat";
      break;
    case 1:
      console.log("switch with different types");
      break;
      
    default:
      console.log("stuff");
      answer = "stuff";

  }


  // Only change code above this line
  return answer;
}



switchOfStuff(1);



function rangeForSwitch(val){
  if(typeof val !== 'number')
    return;

  if(val <= 3 && val >= 1)
    return 1;

  else if (val >= 4 && val<=6)
    return 4;

  else
    return 7;
}
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line

  switch(rangeForSwitch(val)){
    case 1:
      answer = "Low";
      break;
    case 4:
      answer = "Mid";
      break;
    case 7:
      answer = "High";
      break;
   
  }

  // Only change code above this line
  return answer;
}
