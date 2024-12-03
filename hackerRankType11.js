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