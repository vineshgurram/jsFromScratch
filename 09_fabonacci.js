// Create a function that returns a specific member of the Fibonacci sequence:

// A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

let f1=1;
let f2=1;
let sum=0;
for(let i=0;i<4;i++){
    console.log(f1);
    sum=f1+f2;
    f1=f2;
    f2=sum;
    // console.log(i)
}