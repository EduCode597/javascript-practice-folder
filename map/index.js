// .map() = accepts a callback function and applies it to each element in an array, returning a new array with the results.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);


function square (element) {
    return Math.pow(element, 2);
}

function cube (element) {
    return Math.pow(element, 3);
}

const students = ["alice", "bob", "charlie", "david"];
const studentsCapitalized = students.map(capitalize );

console.log(studentsCapitalized);

function capitalize (element) {
    return element.charAt(0).toUpperCase() + element.slice(1);
}

const dates = ["2023-01-15", "2023-02-20", "2023-03-25"];
const formattedDates = dates.map(formatDate);
console.log(formattedDates);

function formatDate (element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
