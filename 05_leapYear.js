// Create a function that determines whether or not a given year is a leap year. 
// Leap years are determined by the following rules:

let year = prompt("Enter a year :");

if (year % 4 == 0) {
    console.log("Year is leap year")
}
else if (year % 100 == 0) {
    if (year % 400) {
        console.log("Year is leap year")
    }
}
else {
    console.log("Year is not leap year")
}



