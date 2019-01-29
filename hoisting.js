// Hoisting is JS default behaviour of moving declarations to the top of the current scope (script or function)

// a variable can be declared after it has been used

x = 5;

console.log(x);

var x;

// let and const are not hoisted.

// Initializations are not Hoisted

var x; // Declarations

x = 2; // Initialization

// Example

console.log(u); //undefined, only the declaration is hoisted on top, not the initalization.

var u = 7; 

// Declare your variables at the top! since this is how JS interprets the code.
// JS in strict mode doesn't allow variables to be used if they are not declared.
// "Use strict"