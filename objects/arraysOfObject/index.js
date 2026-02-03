const fruits = [{name: 'apple', color: 'red', weight: 150}, 
                {name: 'banana', color: 'yellow', weight: 120}, 
                {name: 'coconut', color: 'brown', weight: 200},
                {name: 'cherry', color: 'red', weight: 60}];
//console.log(fruits[0].name); // apple
console.log(fruits[1].name);
console.log(fruits[2].name);

fruits.push({name: 'orange', color: 'orange', weight: 130});
console.log(fruits[3].name); // orange

fruits.forEach(fruit => {
    console.log(`${fruit.name} is ${fruit.color} and weighs ${fruit.weight}g`);
});

const fruitNames = fruits.map(fruit => fruit.name);
const fruitWeights = fruits.map(fruit => fruit.weight);
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitNames);
console.log(fruitWeights);
console.log(fruitColors);

const redFruits = fruits.filter(fruit => fruit.color === 'red');
console.log(redFruits);

const heavyFruits = fruits.filter(fruit => fruit.weight > 100);
console.log(heavyFruits);

const maxFruit = fruits.reduce((max, fruit) => fruit.weight > max.weight ? fruit : max);
console.log(`The heaviest fruit is ${maxFruit.name} weighing ${maxFruit.weight}g`);

const minFruit = fruits.reduce((min, fruit) => fruit.weight < min.weight ? fruit : min);
console.log(`The lightest fruit is ${minFruit.name} weighing ${minFruit.weight}g`);