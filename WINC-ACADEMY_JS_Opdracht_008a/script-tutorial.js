// parameters
// define function
//                      parameter
const sayHiTo = function (name) {
    console.log("Hi " + name)
};

//      argument (when we call or execute the function)
sayHiTo("Malu");

// difference between function and method

// Funtion:
const greet = function () {
    console.log("Hello");
};

// Object:
const person = {
    name: "Malu",
    age: 35,
    // Method: 
    sayHi: function () {
        console.log("Hi");
    },
};

greet();

// A function attached to an object:
Math.random();
// built-in objects (math)
// method (random, a function attached to it)

const greeting = "Hello";
greeting.toUpperCase();
// greeting = string
// All strings have methods attached to them
// method = toUpperCase

/* 
- Return inside a function
- return keyword vs return statement
- How does it work:
    - stop function
    - go back to where function was called
    - return a value
- What can I return?
- Multiple return values
- all functions return "something"
*/

const add = function (number1, number2) {
    const sum = number1 + number2;
    return sum; /* return statement, the whole line */
};

// const, return, function are keywords

const result = add(4, 5);
// 
const doubleArray = function (numbers) {
    const doubled = numbers.map(n => n * 2);
    return doubled;
};

const result2 = doubleArray([1, 2, 3]);
// 

const scream = function(sentence) {
    console.log(`${sentence}!!!`);
};

const result3 = scream("Bees");
console.log(result3);