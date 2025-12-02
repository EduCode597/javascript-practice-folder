// const fullName = "Eduard Dingachev";

// // let firstName = fullName.slice(0, 4);
// // let lastName = fullName.slice(5);

// // let firstChar = fullName.slice(0, 1);
// // let lastchar = fullName.slice(-1);

// // console.log(firstChar);
// // console.log(lastchar);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName); // Output: John
// console.log(lastName); // Output: Doe

const email = "educode@gmail.com"

let username = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf("@") + 1);

console.log(`Username: ${username}`);
console.log(`Domain: ${domain}`);