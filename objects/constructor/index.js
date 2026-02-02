//constructor = special method for defining the properties and methods of an object

function Phone (brand, model, color, price) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.use = function() {
        console.log("You are using " + this.brand + " " + this.model);
    }
}

const phone1 = new Phone("Apple", "Iphone XR", "Black", "$599");
const phone2 = new Phone("Samsung", "Galaxy S10", "White", "$499");
const phone3 = new Phone("Google", "Pixel 4", "Blue", "$399");

console.log(phone1.brand);
console.log(phone1.model);
console.log(phone1.color);
console.log(phone1.price);
phone1.use();

console.log(phone2.brand);
console.log(phone2.model);
console.log(phone2.color);
console.log(phone2.price);
phone2.use();

console.log(phone3.brand);
console.log(phone3.model);
console.log(phone3.color);
console.log(phone3.price);
phone3.use();