//reverse Array query

//given arr. of integers ,arr and an integer k 
// funtion to reverse the k element of array if arrlength<k then reverse entire 

function reverseKEl(arr,k){

 let reverseArray=arr.slice(0,k).reverse()
 
 let restArr=arr.slice(k)
 let result=reverseArray.concat(restArr)
 return result
}
console.log(reverseKEl([1,2,3,4,5],6))

//alternate method
function reverseEl(array,n){
    let newArr=[]
    
  if(n>=array.length){
    for(let i=array.length-1;i>=0;i--){
   newArr.push(array[i])
    }
    return newArr
 }
 else{
    let a=[]
    for(let j=n-1;j>=0;j--){
   a.push(array[j])
  }
  let slicedArr=array.slice(n)
  let b=a.concat(slicedArr)
  return b
 }
 
}
console.log(reverseEl([1,2,3,44,55,8],5))