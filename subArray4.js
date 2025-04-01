// Check if a Subarray with Zero Sum Exists


function hasZeroSumSubarray(nums) {
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]; 
            if (sum === 0) {
                return "Yes";  
            }
        }
    }
    
    return "No";
}

console.log(hasZeroSumSubarray([4, 2, -3, 1, 6])); 