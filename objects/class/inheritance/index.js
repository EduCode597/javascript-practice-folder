// inheritance = allows a new class to inherit properties and methods
//               from an existing class. (parent class to child class)
//               helps with code reusability

class Human {
    alive = true;
    specType = "Humans"
    origin() {
        console.log(`${this.name} is from Earth`);
    }
    species() {
        console.log(`${this.name} belongs to the species: ${this.specType}`);
    }    
}

class Human1 extends Human {
    name = "Rick Sanchez";

    adult () {
        console.log(`${this.name} is already an adult`);
    }
}
class Human2 extends Human {
    name = "Morty Smith";

    student () {
        console.log(`${this.name} is a student`);
    }
}

const human1 = new Human1();
const human2 = new Human2();
human1.origin();
human1.species();
human2.origin();
human2.species();
human1.adult();
human2.student();
let lifeStatus = human1.alive
let statusMessage = lifeStatus ? "alive" : "not alive";
console.log(`${human1.name} is : ${statusMessage}`);
