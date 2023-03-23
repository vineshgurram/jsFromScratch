// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10


function sumAll(from, to) {
    let sum=0;
    for (let i = from; i <=to; i++) {
        sum+=i;
        console.log(i)
    }
    return sum
}

console.log(sumAll(1,4))