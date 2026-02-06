// asynchronous programming is a programming paradigm that allows for non-blocking operations, 
// enabling the program to continue executing other tasks while waiting for certain operations to complete. 
// In JavaScript, asynchronous programming is commonly achieved using callbacks, promises, and async/await syntax.
function func1(callback) {
    setTimeout(() => {
        console.log("Asynchronous Task");
        callback();
    }, 3000);
}

function func2() {
    console.log("Task 1");
    console.log("Task 2");
    console.log("Task 3");
}

func1(func2);