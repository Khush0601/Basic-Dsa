// to check prime no. or not
function isPrime(n){
    let isPrime=false
if(n===1){
    isPrime=false;
}
else if(n===2){
   isPrime=true
}
else{
    for(let i=2;i<n;i++){
        if(n%i===0){
            isPrime=false;
            break
        }
        else{
            isPrime=true
        }

    }
}
return isPrime
}
console.log(isPrime(22))