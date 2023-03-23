function reverseString(string){
let temp="";
    for(let i=string.length-1;i>=0;i--){
        console.log(string[i]);
        temp+=string[i];
    }
return temp
}

console.log(reverseString("Vinesh Gurram"))