class Rectangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error ("Width must be a positive number");
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error ("Height must be a positive number");
        }
    }
    get width() {
        return `${this._width.toFixed(1)}cm`;
    }
    get height() {
        return `${this._height.toFixed(1)}cm`;
    }
    get area() {
        return `${(this._width * this._height).toFixed(1)}cm²`;
    }
}

// const rectangle = new Rectangle(-10000000, "banana");
const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);  
console.log(rectangle.height); 
console.log(rectangle.area);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set name (newName) {
        if (typeof newName === "string" && newName.length > 0) {
            this._name = newName;
        } else {
            console.error("Name must be a non-empty string");
        }
    }
    set age (newAge) {
        if (Number.isInteger(newAge) && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative integer");
        }
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}

const person1 = new Person("20", 25);
console.log(person1.name); 
console.log(person1.age);