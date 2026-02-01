//object = a collection of key-value pairs, can represent real world objects
//object = {key:value, function()} 

const person1 = {
    firstName: "John Eduard",
    lastName: "Madriaga",
    age: 21,
    isStudent: true,
    sayHello: function() {console.log("Hello!")},
    eat: function() {console.log("I like Chicken!!")},
}

const person2 = {
    firstName: "Lyra Jane",
    lastName: "Madriaga",
    age: 29,
    isStudent: false,
    sayHello: () => {console.log("Hi!")},
    eat: () => {console.log("I like Pizza!!")},
}

console.log("First Name: " + person1.firstName);
console.log("Last Name: " + person1.lastName);
console.log("Age: " + person1.age);
console.log("Is Student: " + person1.isStudent);

console.log("First Name: " + person2.firstName);
console.log("Last Name: " + person2.lastName);
console.log("Age: " + person2.age);
console.log("Is Student: " + person2.isStudent);

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();