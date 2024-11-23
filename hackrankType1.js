//You are given an array of integers arr and an integer k. Find the maximum sum of any subarray of size k in the array.
/**
 * 
 * input=[1,2,3,4,5,6,7,8] and k is blw 1 nd arr.length
 * and output will be return the max sum of subarrays of size k
 */
function findSum(arr,n){
    let subArray=[]
    let sums=[]
    
    for(let i=0;i<arr.length;i++){
        let newArrays=arr.slice(i,i+n)
        if(newArrays.length===n){
            subArray.push(newArrays)
        }
    }

    //calculating sum of subarrays
    for(let j=0;j<subArray.length;j++){
        let sum=0
        for(let k=0;k<subArray[j].length;k++){
         sum=sum+subArray[j][k]
        }
        sums.push(sum)
    }
    // finding max 
    let max=sums[0]
    for(let s=0;s<sums.length;s++){
      if(sums[s]>max){
        max=sums[s]
      }
    }
    
    return max
}
console.log(findSum([1,2,3,4,5,6,7,99,34],4))























