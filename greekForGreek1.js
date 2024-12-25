function reverseNum(num){
 let str=String(num)
 let result=[];
 let final;
 for(let i=str.length-1;i>=0;i--){
   result.push(str[i])
 }
final=Number(result.join(''))
return final
}
console.log(reverseNum(12345))