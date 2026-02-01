// function expressions = a way to define a function as values or variables

const greet = function() {
    console.log("Hello there!");
}
setTimeout(greet, 3000); 

setTimeout(function() {
    console.log("I love JavaScript!");
}, 5000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
})
const cubes = numbers.map(function(element) {
    return Math.pow(element, 3);
})
console.log(squares);
console.log(cubes);

const evenNums = numbers.filter(function(element) {
    return element % 2 === 0;
})
console.log(evenNums);

const total = numbers.reduce(function(accumulator, element) {
    return accumulator + element;
})

console.log("Total: " + total);
