 // questions related to prime number
 
 function prime(no){
  let isPrime=false;
  
  if(no===1 || no===2){
      isPrime=true
  }
  else{
      for(let i=2;i<no;i++){
      if(no%i===0){
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
  console.log(prime(23))
  
  function getAllPrime(arr){
      let primeNum=[]
      let sum=0
  for(let i=0;i<arr.length;i++){
  if(prime(arr[i])){
      primeNum.push(arr[i])
      sum=sum+arr[i]
  }
  
  }
  return sum
  }
  console.log(getAllPrime([1,2,3,4,7]))