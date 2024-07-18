 // Recursion fibonacci sequence
 // find fibonacci sequence then find postion of random el in that fibonacci
 function recursion(n,position){
let fib=[0,1]
let pos;
for(let i=2;i<n;i++){
    fib[i]=fib[i-1]+fib[i-2]
    pos=fib[position]
}
return pos
}
console.log(recursion(7,2))