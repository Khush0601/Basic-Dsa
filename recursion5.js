// fibonacci recursion
const fibo=(array,strt,n)=>{
if(array.length===n){
    return array
}
let newNum=array[array.length-1]+array[array.length-2]
array=[...array,newNum]
strt=strt+1

return fibo(array,strt,n)
}
console.log(fibo([0,1],2,5))