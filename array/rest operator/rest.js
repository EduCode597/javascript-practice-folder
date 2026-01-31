//rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array.
//spread operator = (...) unpacks elements from an array or object
//rest operator = (...) bundles separate elements into an array

function openfoodbox(...foods) { //rest operator used here to bundle all arguments into an array named foods
    console.log(...foods);//spread operator used here to unpack the foods array
}
const food1 = "Pizza";
const food2 = "Burger";
const food3 = "Pasta";
const food4 = "Ice-cream";

openfoodbox(food1, food2, food3, food4); 

function getItems(...items) {
    return items;
}
const item1 = "Book";
const item2 = "Pen";
const item3 = "Notebook";
const item4 = "Eraser";

const items = getItems(item1, item2, item3, item4);
console.log(items);

function sumAll(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
const total = sumAll(10, 20, 30, 40, 50);
console.log(total);

function getAverage(...scores) {
    let result = 0;
    for (let score of scores) {
        result += score;
    }
    return result / scores.length;
}
const averageScore = getAverage(75, 100, 85, 90, 50);
console.log(averageScore);

function combineStrings(...strings) {
    return strings.join(" ");
}

const fullname = combineStrings("Mrs.", "Lyra", "Jane", "Madriaga");
console.log (fullname);