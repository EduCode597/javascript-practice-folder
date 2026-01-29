function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
}

function isEven (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isValidEmail (email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

console.log(add (5, 3));        
console.log(subtract (5, 3));  
console.log(multiply (5, 3));   
console.log(isEven (5));
console.log(isValidEmail("test@example.com"));