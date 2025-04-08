function armstrong(n){
    let str=String(n)
    let power=str.length;
    
    let sum=0
    for(let i=0;i<str.length;i++){
        let digit=Number(str[i])**power
        sum+=digit
    }
   if(sum===n){
    return true
   }
   else {
    return false
   }
}
console.log(armstrong(153))