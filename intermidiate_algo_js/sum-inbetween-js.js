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
