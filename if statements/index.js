// if (age >= 18) {
//     console.log("You are old enough to have a driver's license.");

//     if (hasLicense) {
//         console.log("You have a valid driver's license.");
//     } else {
//         console.log("You do not have a valid driver's license.");
//     }
// }
// // else if will check something before it enters the else block
// // order matters
// else if (age < 0) {
//     console.log("your age is not valid");
// }
// // output will be "You are old enough to have a driver's license."
// else if (age >= 100)   {
//     console.log("You are very old to drive a car.");
// }
// else {
//     console.log("You are not old enough to have a driver's license.");
// }
var output = document.getElementById("output");

function checkDrivingEligibility() {
    var age = parseFloat(document.getElementById("ageInput").value);
    var licenseStatus = document.getElementById("licenseInput").value;

    if (age <= 0) {
        output.innerText = "Your age is not valid.";
    }
    else if (age >= 100) {
        output.innerText = "You are very old to drive a car.";
    }
    else if (age >= 18 && licenseStatus === "hasLicense") {
        output.innerText = "You are old enough to have a driver's license and you have a valid driver's license.";
    }
    else if (age >= 18 && licenseStatus === "noLicense") {
        output.innerText = "You are old enough to have a driver's license but you do not have a valid driver's license.";
    }
    else if (age >= 18 && licenseStatus === "ongoing") {
        output.innerText = "You are old enough to have a driver's license and your license is ongoing.";
    }
    else {
        output.innerText = "You are not old enough to have a driver's license.";
    }    
}

