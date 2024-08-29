// another way of solving fibonacci
function fibonacci(n){
let fib=[2,3,5]
for(let i=3;i<n;i++){
    fib[i]=fib[i-1]+fib[i-2]
   
}
return fib
}
console.log(fibonacci(7))
// 2nd way
const fibb=(arr,n)=>{
    for(let i=2;i<=n;i++){
       arr.push(arr[i-1]+arr[i-2])
    }
    return arr
    }
    console.log(fibb([0,1],7))