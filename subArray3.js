// Count Subarrays with Given Sum

function countSubArray(nums,target){
  let count=0;
  for(let i=0;i<nums.length;i++){
    let sum=0;
    for(let j=i;j<nums.length;j++){
        sum+=nums[j]
        if(sum===target){
            count++
        }
    }
  }
  return count
}
console.log(countSubArray([1,1,1],2))