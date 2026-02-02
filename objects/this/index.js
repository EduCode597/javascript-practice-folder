// this = reference to the object where This is used
//        The object depends on the immediate context
//        person.name = this.name

const person1 = {
    name: "John Eduard Madriaga",
    age: 21,
    greet: function() {
        console.log("Hello, " + this.name);
    },
    introduce: function() {
        console.log("I am " + this.age + " years old.");
    },
}

person1.greet();
person1.introduce();