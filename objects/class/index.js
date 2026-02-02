// class = provides a more structured and cleaner way to work with objects and inheritance in JavaScript.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product name: ${this.name}`);
        console.log(`Product Price:  $${this.price.toFixed(2)}`);
    }
    calculateDiscount(discount) {
        return this.price - (this.price * discount);
    }
}
const discount = 0.05;
const product1 = new Product("Laptop", 999);
const product2 = new Product("Smartphone", 699);
product1.displayProduct();
product2.displayProduct();

const totalPrice = product1.calculateDiscount(discount);
console.log(`Total Price of ${product1.name} after discount: $${totalPrice.toFixed(2)}`);