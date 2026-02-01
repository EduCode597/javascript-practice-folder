// arrow function = a concise way to write functions in JavaScript
//(parameters) => { function body }

const hello = (name) => {console.log(`Hello ${name}!`) 
                        console.log("Welcome to Arrow Functions.")}; 
hello("Alice");

setTimeout( () => {
    console.log("This message is shown after 3 seconds");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
const oddNumbers = numbers.filter((element) => element % 2 !== 0);

console.log(squares);
console.log(cubes);
console.log(evenNumbers);
console.log("Total: " + total);
console.log(oddNumbers);