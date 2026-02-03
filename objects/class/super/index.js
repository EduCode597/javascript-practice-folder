//super = used in classes to call the constructor or access the 
//        properties and methods of a parent (superclass)
//        this = this object
//        super = parent object

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move (speed) {
        console.log(`${this.name} is moving at ${speed} km/h`);
    }
}

class Dog extends Animal {
    constructor (name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`${this.name} can run.`);
        super.move(this.runSpeed); 
    }
    
}

class Bird extends Animal {
    constructor (name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

class Shark extends Animal {
    constructor (name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

const dog = new Dog("Buddy", 3, 25);
const bird = new Bird("Tweety", 2, 15);
const shark = new Shark("Jaws", 5, 40);

dog.run();
bird.fly();
shark.swim();

// console.log(`Dog Name: ${dog.name}, Age: ${dog.age}, Run Speed: ${dog.runSpeed} km/h`);
// console.log(`Bird Name: ${bird.name}, Age: ${bird.age}, Fly Speed: ${bird.flySpeed} km/h`);
// console.log(`Shark Name: ${shark.name}, Age: ${shark.age}, Swim Speed: ${shark.swimSpeed} km/h`);