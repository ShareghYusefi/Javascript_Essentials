// Single line Comment
/*
    Multi-line Comment
    Var is a keyword used to declare or initialize a variable
    Variable is a container that stores data values
    = (assignment operator) sign is used to assign a value to a variable
*/

// Primitive Data Types
// 1. String
var firstname = "John";
console.log("First Name: ", firstname);
firstname = "20"; // Reassigning the value to any other data type
console.log("First Name: ", firstname);

// 2. Number
var age = 25;
console.log("Age: ", age);

// 3. Boolean (true or false)
var isAdult = true;
console.log("Adult: ", isAdult);

// Empty Data Types
// 1. Null - declared a variable but assigned an empty value
var emptyVariable = null;
console.log("Null State: ", emptyVariable);

// 2. Undefined - delcared a variable but not assigned a value
var UndefinedVariable = undefined;
console.log("Undefined State: ", UndefinedVariable);

// Object Data Type - collection of different data types
// Object
var person = {
  firstname: "John",
  lastname: "Doe",
  age: 25,
};

console.log("Person: ", person);

// Array Object - zero indexed list of items
var languages = ["Javascript", "Python", "Java"];
// index        [0,            1,        2]
console.log("Languages: ", languages);

// Function Data Type - block of code that performs a specific task
var date = Date();
console.log("Date: ", date);

// Arithmetic Operators - +, -, *, /, %, ++, --
var x = 10;
var y = 15;

console.log("Addition: ", x + y); // 25
console.log("Subtraction: ", x - y); // -5
console.log("Multiplication: ", x * y); // 150
console.log("Division: ", y / x); // 1.5

// Modulus Operator - returns the remainder of a division operation
console.log("Modulus: ", y % x); // 5

// Increment Operator - increases the value of a variable by 1
console.log("Increment: ", x++); // 10
console.log("Increment: ", ++x); // 12
// Decrement Operator - decreases the value of a variable by 1
console.log("Decrement: ", y--); // 15
console.log("Decrement: ", --y); // 13

// Compound Assignment Operators - +=, -=, *=, /=, %=
var a = 5; // a = 5
var b = 10;

console.log("+=: ", (a += b)); // a = a + b => a = 15
console.log("-=: ", (a -= b)); // a = a - b => a = 5

console.log("*=: ", (a *= b)); // a = a * b => 50
console.log("/=: ", (a /= b)); // a = a / b => 5
console.log("%=: ", (a %= b)); // a = a % b => 5

// Comparison Operators (result in boolean) - ==, ===, !=, !==, >, <, >=, <=
// ! - not operator so != -> not equal to
// == - checks only the value
// === - checks the value and the data type
var c = 10;
var d = "10";
var e = 20;

console.log("==: ", c == d); // true
console.log("===: ", c === d); // false : d is a string
console.log("> : ", c > e); // false
console.log("< : ", c < e); // true
console.log(">= : ", c >= e); // false
console.log("<= : ", c <= e); // true
console.log("!= : ", c != e); // true

// Logical Operators - &&, ||, !
// && - and operator
// || - or operator
// ! - negation operator

console.log("&&: ", c == d && c < e); // true

// When using || operator, if the first condition is true, the second condition is not checked
console.log("||: ", c == d || c > e); // true
console.log("||: ", c > e || c == d); // true

// String Manipulation
var firstname = "John";
var lastname = "Doe";

// string concatenation - joining two or more strings
var fullname = firstname + " " + lastname;
console.log("Full Name: ", fullname);

// using concat method
var fullname = firstname.concat(" ", lastname);
console.log("Full Name Concat Function: ", fullname);

// using backticks or template literals
var fullname = `${firstname} ${lastname}`;
console.log("Full Name Template Literal: ", fullname);

// String Methods (functions) & properties (variables)
// 1. length - returns the length property of a string
// strings are zero indexed like arrays
console.log(firstname.length);

// 2. toUpperCase - converts a string to uppercase
// Need to use parenthesis to call a function
console.log(firstname.toUpperCase());

// 3. indexOf - returns the index of a character in a string
console.log(firstname.indexOf("o")); // 1

// 4. charAt - returns the character at a specific index
console.log(firstname.charAt(1)); // o

// Arrays - zero indexed list of items

// Creating Arrays
var cars = ["BMW", "Audi", "Mercedes"];
console.log("Cars: ", cars);

// Array(3) - creates an array with 3 empty slots
var fruit = new Array(3);
console.log("Fruit: ", fruit);

// Array(3, 6, 8) - creates an array with provided values
var fruit = new Array(3, 6, 8);
console.log("Fruit: ", fruit);

// Accessing Array Elements
console.log("First Element: ", cars[0]); // BMW

// Assigning a new value to an element in an array
cars[0] = "Toyota"; // Reassigning the value
console.log("Cars: ", cars);

// Array Methods (functions) & properties (variables)
// 1. length - returns the length property of an array
console.log("Length: ", cars.length);

// 2. push - adds an element to the end of an array
cars.push("Tesla");
console.log("Cars: ", cars);

// 3. unshift - adds an element to the beginning of an array
cars.unshift("Honda");
console.log("Cars: ", cars);

// 4. pop - removes the last element from an array
cars.pop();

// 5. shift - removes the first element from an array
cars.shift();
console.log("Cars: ", cars);

// 6a. splice - adds or removes elements from an array
// splice(startIndex, deleteCount, item1, item2, ...)
// Starting at index 1, remove 0 elements and add Ford and Chevy
cars.splice(1, 0, "Ford", "Chevy");
console.log("Cars: ", cars);

// 6b. splice - removes elements from an array
// Starting at index 1 (inclusive), remove 2 elements
cars.splice(1, 2);
console.log("Cars: ", cars);

// 7. sort - sorts the elements in alphabetical or numerical order
cars.sort();
console.log("Cars: ", cars);

// 8. slice - returns a copy of a portion of an array
// slice(startIndex, endIndex) - endIndex is exclusive
var newCars = cars.slice(1, 3);
console.log("New Cars: ", newCars);

// reverse - reverses the order of elements in an array
cars.reverse();
console.log("Reversed Cars: ", cars);

var numbers = [4, 9, 16, 25];
// 9. map - creates a new array with the results of calling a function for every array element
var squaredNumbers = numbers.map(Math.sqrt);
console.log("Squared Numbers: ", squaredNumbers);

// 2D Arrays - arrays within an array

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log("Matrix: ", matrix);
// Accessing elements in a 2D array
console.log("Element: ", matrix[0][1]); // 2

// Functions - block of code that performs a specific task
// Syntax: function functionName(parameters) { code to be executed }
// Parameters are variables that are used in the function definition
// return keyword is used to return a value from a function

// Defining a function requires the function keyword
// This function takes two parameters and returns the sum of the two parameters
// parameters: A placeholder inside a function definition. It acts as a variable name for the value that is passed to the function when it is called.
function sum(a, b) {
  return a + b;
}

var price1 = 5;
var price2 = 10;
var price3 = 15;
var price4 = 20;

// Arguments: The actual value/variable that you pass to a function. This value replaces the parameter during usage/function call.
var result = sum(price1, price2);
console.log("Sum: ", result);
var result2 = sum(price3, price4);
console.log("Sum2: ", result2);

// Most things in Javascript are or become objects with functions and variables

// Conditional Statements
// if, else if, else
// Syntax: if (condition) { code to be executed }
// if is a function that takes a condition as an argument, and if the condition is true, it executes the code block inside the curly braces.

var age = 19;
if (age >= 21) {
  console.log("You can vote");
} else if (age >= 18) {
  console.log("You can drive");
} else {
  console.log("You are a minor");
}

// Switch Statement
// Syntax: switch(expression) { case value: code to be executed; break; default: code to be executed if no case matches; }
// switch is a function that takes an expression as an argument, and based on the value of the expression, it executes the code block inside the matching case.

// Define a variable to use in the switch statement
// expression means the value that you want to compare
var day = "Thursday";

switch (day) {
  // Check if day is equal to Monday
  case "Monday":
    console.log("Today is Monday");
    break; // Break statement is used to exit the switch statement

  // We wont reach this case because we have a mathcing case above that includes breaking out of the switch statement
  case "Tuesday":
    console.log("Today is Tuesday");
    break;

  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  // default is used when no case matches the expression
  default:
    console.log("Today is not a weekday");
}

// Loops
// For Loop, While Loop, Do While Loop

// For Loop
// Syntax: for (initialization; condition; increment/decrement) { code to be executed }
// for is a function that takes three arguments: initialization, condition, and increment/decrement. It executes the code block inside the curly braces until the condition is false.
// initialization: A statement that is executed once before the execution of the code block.
// condition: An expression that is evaluated before each iteration. If the condition is true, the loop continues. If the condition is false, the loop stops.
// increment/decrement: A statement that is executed after each iteration.
for (let i = 0; i < 3; i++) {
  console.log("i is: ", i);
}

// While Loop
// Syntax: while (condition) { code to be executed }
var j = 0;
while (j <= 3) {
  console.log("j is: ", j);
  j++; // Increment j by 1
}

// Do While Loop
// Syntax: do { code to be executed } while (condition)
// Executes the code block once before checking the condition
var k = 0;
do {
  console.log("k is: ", k);
  k++;
} while (k <= 3);

// We can use the for loop to also iterate over arrays
// Syntax: for (variable of array) { code to be executed }
var fruits = ["Apple", "Banana", "Cherry"];
for (var fruit of fruits) {
  console.log("Fruit: ", fruit);
}

// using index of array
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit: ", fruits[i]);
}
