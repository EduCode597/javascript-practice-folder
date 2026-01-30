let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

fruits.pop(); // Removes 'Elderberry'

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]); // This will be undefined since we removed the last element

fruits.push('Fig'); // Adds 'Fig' to the end of the array
fruits.unshift('Avocado'); // Adds 'Avocado' to the beginning of the array
fruits.shift(); // Removes 'Avocado' from the beginning of the array
console.log(fruits);

let meat = ['Chicken', 'Beef', 'Pork'];

for (let i = 0; i < meat.length; i++) {
    console.log(meat[i]);
}

for (let i = meat.length -1; i >= 0; i--) {
    console.log(meat[i]);
}

let vegetables = ['Carrot', 'Broccoli', 'Spinach', 'Potato'];

vegetables.sort();

for (vegetable of vegetables) {
    console.log(vegetable);
}

vegetables.sort().reverse();

for (vegetable of vegetables) {
    console.log(vegetable);
}
