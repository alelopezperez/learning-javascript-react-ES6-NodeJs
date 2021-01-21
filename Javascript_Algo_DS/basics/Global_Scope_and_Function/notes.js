/*

In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.


*/

/*

It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
*/

var myGlobal = 10;

function fun1() {

  oopsGlobal = 5; // i put var oopsGlobal it will no be printed because it does not existe outside the function.

}



function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
