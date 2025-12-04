let username = window.prompt("Enter your username:");
// no method chaining
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let otherLetters = username.slice(1);
// otherLetters = otherLetters.toLowerCase();
// let formattedUsername = letter + otherLetters;
// console.log(formattedUsername);

// with method chaining
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);