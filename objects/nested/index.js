// nested objects = Objects inside of other objects.
//                  Allows you to represent more complex data structures.
//                  Child Object is enclosed by a Parent Object.

//                  Person{Address{}, ContactInfo{}, Job{}}

const person = {
    name: "Alice Johnson",
    age: 28,
    isStudent: false,
    hobbies: ["reading", "traveling", "swimming"], 
    address: {
        street: "123 Main St",
        city: "Wonderland",
        country: "Canada",
    }
}

console.log(person.name); // Alice Johnson
console.log(person.age); // 28
console.log(person.isStudent); // false
console.log(person.hobbies[2]);

for (const property in person.address) {
    console.log(person.address[property]);
}

class Person {
    constructor(name, age,...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob Squarepants", 20, "456 Ocean Ave", 
                            "Bikini Bottom", "Pacific Ocean");

const person2 = new Person("Patrick Star", 22, "789 Rock St", 
                            "Bikini Bottom", "Pacific Ocean");

const person3= new Person("Squidward Tentacles", 30, "101 Squid St", 
                            "Bikini Bottom", "Pacific Ocean");

console.log(person1.name);
console.log(person1.address.street);