/*
Callbacks: functions that are passed as parameter into another funciton.

First Class Functions: Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value

High Order Functions: function that recieve or returns a function

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.??

Mutation: changing things like values or functions, changing the state.


Always pass any varibles that a function uses as parameters of the function
Another principle of functional programming is to always declare your dependencies explicitly. 
This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.


So far, we have seen two distinct principles for functional programming:

Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like var newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

*/
