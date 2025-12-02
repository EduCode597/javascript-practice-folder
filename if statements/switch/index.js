// let day =8;

// switch(day) {
//     case 1:
//         console.log("Monday");
//         break; 
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log(`${day} is not a valid day`);
// }

let testScore = 85;
let grade;

switch (true){
    case testScore >= 90:
        grade = "A";
        break;
    case testScore >= 80:
        grade = "B";
        break;
    case testScore >= 70:
        grade = "C";
        break;
    case testScore >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`Your grade is ${grade}`);