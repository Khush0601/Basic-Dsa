// reverse an array
//without method
function reversearray(arr){
    let result=[]
for(let i=arr.length-1;i>=0;i--){
   result.push(arr[i])
}
return result
}
console.log(reversearray([1,2,3,4]))
//using method
function reversing(arr){
  let b=arr.reverse()
  return b
}
console.log(reversing([1,2,3,4]))