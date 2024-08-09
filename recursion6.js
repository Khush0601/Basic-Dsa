const isPowerOfTwo=(num)=>{
 if(num===1){
    return num
 }
 let newNum=num/2
 let rest=num%2
 if(rest===0){
    return isPowerOfTwo(newNum)
 }
 else{
    return newNum
 }
}
const getResult=(n)=>{
return isPowerOfTwo(n)===1?true:false
}
console.log(getResult(8))


