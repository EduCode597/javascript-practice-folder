let x = 3; //Global scope - Accessible everywhere in this file

function1();
function2();

function function1() {
    let x = 5; //Local scope - Accessible only within this function
    console.log(x);
}

function function2() {
    let x = 2; //Local scope - Accessible only within this function
    console.log(x);
}