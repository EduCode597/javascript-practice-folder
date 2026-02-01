// .filter() = creates a new array filled with elements that pass a test provided by a function 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

console.log (evenNumbers);
console.log (oddNumbers);

function isEven (element) {
    return element % 2 === 0;
}

function isOdd (element) {
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 19, 20, 60]
const adults = ages.filter(isAdult);
const children = ages.filter(isChildren);

console.log('Ages of Adults: ' + adults);
console.log('Ages of children: ' + children);

function isAdult (element) {
    return element >= 18;
}

function isChildren (element) {
    return element < 18;
}

const words = ["apple", "banana", "kiwi", "cherry", "mango", "fig", "grape"];
const shortWords = words.filter(isShortWord);
const longWords = words.filter(isLongWord);

console.log(shortWords);
console.log(longWords);

function isShortWord(element) {
    return element.length <= 4;
}

function isLongWord(element) {
    return element.length > 4;
}