function factorial(n){
    if(n<=1){
        return n
    }
    return n*factorial(n-1)
}
let data=factorial(5)
console.log(data)