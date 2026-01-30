// spread operators (unpacks the elements)
// allows an iterable such as an 
// array or string to be expanded 
// in places where zero or more arguments
// (for function calls) or elements
// (for array literals) are expected,
// or an object expression to be expanded 
// in places where zero or more key-value pairs 
// (for object literals) are expected.

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
console.log(maximum); // Output: 5

let username = "Lyra";
let letters = [...username];
for (let letter of letters) {
    console.log(letter);
}