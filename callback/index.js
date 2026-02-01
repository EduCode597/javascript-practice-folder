// callback = a function that is passed as an argument to another function
//used to handle asynchronous operations
//1. reading a file
//2. network requests
//3. interacting with databases
hello(goodbye);
function hello(callback) {
    console.log("Hello, world!");
    callback ();
}

function leave() {
    console.log("Leave...");
}

function wait() {
    console.log("Wait!!");
}

function goodbye() {
    console.log("Goodbye, world!");
}

sum(displayResult, 5, 10);

function sum (callback, x, y) {
    const result = x + y;
    callback(result);
}

function displayResult(result) {
    console.log("The result is: " + result);
}