// While loop = repeats a block of code as long as a specified condition is true

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter your username:");
    password = window.prompt("Enter your password:");
    if (username === "admin" && password === "password123") {
        loggedIn = true;
        console.log("You are now logged in!");
    } else {
        console.log("Incorrect username or password. Please try again.");
    }
}