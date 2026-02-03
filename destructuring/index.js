// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = array destructuring
// {} = object destructuring

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// array destructuring
const [firstColor, secondColor, thirdColor, ...restColors] = colors;
console.log(firstColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blues
console.log(restColors); // []

function displayPersonInfo({firstName, lastName, age, job="Unemployed"}) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    job: "Developer"
}

const person2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    city: "Los Angeles"
}

const {firstName, lastName, age, job="Unemployed"} = person1;
console.log(firstName); // John 
console.log(lastName); // Doe
console.log(age);
console.log(job); // Developer

displayPersonInfo(person1);
displayPersonInfo(person2);