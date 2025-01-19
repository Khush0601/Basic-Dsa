function findDigits(n){
    let countDivisior=0;
   
    
 let str=String(n)
 for(let i=0;i<str.length;i++){
    let Num=Number(str[i])
   if(n%Num===0){
  countDivisior++
   }
  
 }
 return countDivisior
}
console.log(findDigits(120))