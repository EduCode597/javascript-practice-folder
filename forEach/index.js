// forEach() = method used to iterate over an array
//             and apply a callback function to each element
//             array.forEach(callback)
//             element, index, array (optional parameters)

let numbers = [2, 4, 6, 8];

numbers.forEach(cube);
numbers.forEach(display);

function double (element, index, array){
    array[index] = element * 2;
}

function triple (element, index, array){
    array[index] = element * 3;
}

function square (element, index, array){
    array[index] = Math.pow(element, 2);
} 

function cube (element, index, array){
    array[index] = Math.pow(element, 3);
} 

function display (element){
    console.log(element);
}

let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase (element, index, array) {
    array[index] = element.toUpperCase();
}

function lowerCase (element, index, array) {
    array[index] = element.toLowerCase();
}

function capitalize (element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display (element){
    console.log(element);
}