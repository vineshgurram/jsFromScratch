function add(a,b){
    return a+b
}

function sub(a,b) {
    return a-b 
}

function multiply(a,b) {
    return a*b
}

function factorial(F) {
    let fact=1;
    for(let i=F;i>0;i--){
        fact*=i;
    }
    return fact
}

function sum(N) {
    let sum=0;
    for (let i = N; i >0; i--) {
        sum+=i;
    }
    return sum
}


function power(N,P){
    let result=1;//
    for(let i=1;i<=P;i++){
        result*=N;
    }
    return result
}


// 3*3
// 3*3*3
console.log(power(3,3))
console.log(sum(5))
