Q:- what is pure functions in javascript?
Ans:- A pure function is a function which:
1. Given the same input, will always return the same output.
2. Produces no side effects.
example of pure function:-
function add(a, b) {
    return a + b;
}
add(1, 2); // 3
add(1, 2); // 3

interview question on pure function:-
1. What is the output of the following code?
function add(a, b) {
    return a + b;
}
add(1, 2); // 3
add(1, 2); // 3
Ans:- 3

2. What is the output of the following code?
function add(a, b) {
    return a + b + Math.random();
}
add(1, 2); // 3.432429
add(1, 2); // 3.343523
Ans:- 3.432429

3. What is the output of the following code?
let counter = 0;
function increment() {
    return ++counter;
}
increment(); // 1
increment(); // 2
Ans:- 1

4. What is the output of the following code?
let counter = 0;
function increment() {
    return ++counter + Math.random();
}
increment(); // 1.432429
increment(); // 2.343523
Ans:- 1.432429

// Path: javascript_notes/impure_function.js
Q:- what is impure functions in javascript?
Ans:- A function is said to be impure if it mutates the state of the program.

// Path: javascript_notes/first_class_function.js
Q:- what is first class functions in javascript?
Ans:- In Javascript, functions are first class objects. That means, like other objects you know, functions can be:
1. stored in a variable
2. passed as an argument to a function
3. returned from a function

// Path: javascript_notes/higher_order_function.js
Q:- what is higher order functions in javascript?
Ans:- A higher-order function is a function that takes a function as an argument, or returns a function.

// Path: javascript_notes/closure.js
Q:- what is closure in javascript?
Ans:- A closure is the combination of a function and the lexical environment within which that function was declared.

// Path: javascript_notes/prototype.js
Q:- what is prototype in javascript?
Ans:- Every JavaScript object has a prototype. The prototype is also an object.

// Path: javascript_notes/prototype_chain.js
Q:- what is prototype chain in javascript?
Ans:- The prototype chain is used to implement inheritance and shared properties.

// Path: javascript_notes/currying.js
Q:- what is currying in javascript?
Ans:- Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

// Path: javascript_notes/hoisting.js
Q:- what is hoisting in javascript?
Ans:- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// Path: javascript_notes/this.js
what is this in javascript?
Ans:- The JavaScript this keyword refers to the object it belongs to.
It has different values depending on where it is used:
1. In a method, this refers to the owner object.
2. Alone, this refers to the global object.
3. In a function, this refers to the global object.
4. In a function, in strict mode, this is undefined.
5. In an event, this refers to the element that received the event.
6. Methods like call(), and apply() can refer this to any object.

// Path: javascript_notes/apply.js
Q:- what is apply in javascript?
Ans:- The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

// Path: javascript_notes/call.js
Q:- what is call in javascript?
Ans:- The call() method calls a function with a given this value and arguments provided individually.

// Path: javascript_notes/bind.js
Q:- what is bind in javascript?
Ans:- The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.