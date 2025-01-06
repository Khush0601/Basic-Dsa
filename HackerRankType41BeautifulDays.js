function beautifulDays(a,b,k){
    let count=0;
for(let i=a;i<=b;i++){
    let reversed=String(i).split('').reverse().join('')
    let reversedNumber=Number(reversed)
   let diff=Math.abs(i-reversedNumber)
   if(diff%k===0){
     count++
   }

}
return count
}
console.log(beautifulDays(20,23,6))