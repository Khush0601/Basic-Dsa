// Check if a Subarray with Zero Sum Exists


function hasZeroSumSubarray(nums) {
    let result=[]
   for(let i=0;i<nums.length;i++){
    let sum=0;
    let subArr=[]
    for(let j=i;j<nums.length;j++){
     sum+=nums[j]
     subArr.push(nums[j])
     if(sum===0){
        result.push([...subArr])

     }
    }
   }
    return result;
}

console.log(hasZeroSumSubarray([4, 2, -3, 1, 6])); 