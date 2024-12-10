// Given five positive integers, find the minimum and maximum values that 
// can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example
// The minimum sum is  and the maximum sum is . The function prints
// 16 24

// Min Max sum

function MinMaxSum(array){
 let minSum=0;
 let maxSum=0;
 let arr=array.sort((a,b)=>{
    if(a>b){
        return 1
    }
    if(a<b){
        return -1
    }
    if(a===b){
        return 0
    }
   
 })
 
 for(let i=0;i<arr.length-1;i++){
    minSum=minSum+arr[i]
 }
 for(let j=arr.length-1;j>=1;j--){
    maxSum=maxSum+arr[j]
 }
 return `${minSum} ${maxSum}`
}
console.log(MinMaxSum([14,22 ,36, 142 ,5]))