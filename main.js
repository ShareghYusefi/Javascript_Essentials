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


