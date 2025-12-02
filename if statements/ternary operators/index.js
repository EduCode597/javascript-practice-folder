// ternary opeartors = a shortcut in making if-else statements 
// syntax: condition ? expression if true : expression if false

// let time = 9;
// let message = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(message); // Output: Good morning!

// let isStudent = true;
// let email = isStudent ? "you are a student": "you are not a student";
// console.log(email); // Output: you are a student

let purchaseAmount = 125;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`Your total payment is  $${purchaseAmount - purchaseAmount * (discount / 100)}`); // Output: 112.5