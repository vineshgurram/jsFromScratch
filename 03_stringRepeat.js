function stringRepeat(string,num){
let temp="";
for (let i = 0; i <num; i++) {
    temp+=string[i];
}
return temp
}

console.log(stringRepeat("Hey",10))