// Count Subarrays with Given Sum

function countSubArray(nums,target){
  let count=0;
  let result=[]
  for(let i=0;i<nums.length;i++){
    let sum=0;
    let subArr=[]
    for(let j=i;j<nums.length;j++){
        sum+=nums[j]
        
        subArr.push(nums[j]);
       
        if(sum===target){
            count++
            result.push([...subArr])
        }
    }
  }
  return result
}
console.log(countSubArray([1,1,1],2))