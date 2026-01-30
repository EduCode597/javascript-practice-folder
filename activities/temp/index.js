const inputTemp = document.getElementById('inputTemp');
const convertBtn = document.getElementById('convertBtn');
const conversionType = document.getElementById('conversionType');
const result = document.getElementById('result');
let temp;

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

convertBtn.addEventListener('click', () => {
    temp = parseFloat(inputTemp.value);
    if (conversionType.value === "1") {
        result.textContent = `${temp}°C is ${celsiusToFahrenheit(temp).toFixed(2)}°F`;
    } else if (conversionType.value === "2") {
        result.textContent = `${temp}°F is ${fahrenheitToCelsius(temp).toFixed(2)}°C`;
    } else {
        result.textContent = "Please select a conversion type.";
    }
});