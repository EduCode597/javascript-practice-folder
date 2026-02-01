sum(displayPage, 5, 10);

function sum (callback, x, y) {
    const result = x + y;
    callback(result);
}

function displayResult(result) {
    console.log("The result is: " + result);
}

function displayPage(result) {
    document.getElementById("title").textContent = "The result is: " + result;
}
