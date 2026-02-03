// sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographical (dictionary) order by default.
// lexicographical order = (alphabet + numbers + symbols) as strings

let fruits = ['banana', 'apple', 'orange', 'mango', 'grape'];
fruits.sort();

let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);

console.log(numbers);
console.log(fruits); // ['apple', 'banana', 'grape', 'mango', 'orange']

const persons = [{name: "Spongebob", age: 20, gpa: 3.0}, 
                {name: "Patrick", age: 30, gpa: 1.0}, 
                {name: "Squidward", age: 26, gpa: 2.7}, 
                {name: "Sandy", age: 28, gpa: 1.25}];

persons.sort((a, b) => a.age - b.age);
console.log(persons);

persons.sort((a, b) => a.gpa - b.gpa);
console.log(persons);

persons.sort((a, b) => a.name.localeCompare(b.name));
console.log(persons);