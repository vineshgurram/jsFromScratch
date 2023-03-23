
function palindrome(string) {
    console.log(string.length)
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    let result;
    if (string == reverse) {
        result = true
    }
    else {
        result = false
    }
    return result
}

console.log(palindrome("racecar"))
