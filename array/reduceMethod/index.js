// .reduce() = reduce the elements of an array to a single value (going from left to right)

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(calculateTotal);
console.log("Total Price: $" + total);

function calculateTotal (accumulator, element) {
    return accumulator + element;
}

const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMaximum);
const minimum = grades.reduce(getMinimum);

function getMaximum (accumulator, element) {
    return Math.max(accumulator, element);
}

function getMinimum (accumulator, element) {
    return Math.min(accumulator, element);
}
console.log("Highest Grade: " + maximum);
console.log("Lowest Grade: " + minimum);
