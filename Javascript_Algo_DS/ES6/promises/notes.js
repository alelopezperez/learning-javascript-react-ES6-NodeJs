// Promises are asyn functions. it's a constructor that takes a function as an parameter.
// and that ffunctions needs to have to parameters; resolve and reject
// here is the structure

//const makeServerRequest = new Promise(asyncfunc);

let makeServerRequest = new Promise((resolve,reject) =>{

});


// Promises has 3 stages.
// Pending
// Fullfied
// Rejected

// A completed promise

const makeServerRequest = new Promise((resolve, reject) => {

  let responseFromServer;
    
  if(responseFromServer) {
   resolve("We got the data")
  } 
  
  else {  
    reject("Data not received")
  }
  
});


/// How to use a promise that you created. you want to do something with the request. like if it is a valid login.
//you want to use the returned json for something.
//result is just a name and is given by the returned from resolve.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
//error is just named and comes from the return of the reject
makeServerRequest.catch(error => {
  console.log(error);
});
