function sumAll(arr) {
  const ans = arr.reduce((sum, curr)=>{
    sum += curr;
    return sum;
  }, 0);
  
  let [low, high] = [arr[0],arr[1]];
  if(low > high) [low, high] = [high, low];
  let sum= 0;
  for(let i = low+1; i<high; i++)
    sum +=i;


  return ans+sum;

}

function sumAll(arr) {
 let sum = 0
 let [low, high] = [arr[0],arr[1]];
 if(low>high) [low,high] = [high,low];
  for(let i = low; i<=high; i++)
    sum +=i;


  return sum;

}

console.log(sumAll([4,1]));


//Functional;
function sumAllRange(start, end){
  console.log(start);
  if(start == end)
    return start;

  return start + sumAllRange(start+1,end);
}

function sumAll(arr) {
 if(arr[0]<arr[1])
  return sumAllRange(arr[0],arr[1]);
 else
  return sumAllRange(arr[1],arr[0]);


}

console.log(sumAll([4,1]));
