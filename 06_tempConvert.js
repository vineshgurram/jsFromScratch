// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// convertToCelsius(32) // fahrenheit to celsius, should return 0\
// convertToFahrenheit(0) // celsius to fahrenheit, should return 32

function celisusToFahrenheit(C) {
    let Fahrenheit = (C * (9 / 5)) + 32;
    return Fahrenheit
}

function fahrenheitTocelisus(F) {
    let Celisus = ((5 / 9) * (F - 32));
    return Celisus
}
let result = celisusToFahrenheit(0)
console.log(result)
console.log(fahrenheitTocelisus(32))