// another way of solving fibonacci
function fibonacci(n){
let fib=[2,3,5]
for(let i=3;i<n;i++){
    fib[i]=fib[i-1]+fib[i-2]
   
}
return fib
}
console.log(fibonacci(7))