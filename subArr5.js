// find the length of the longest subarray with a sum equal to zero.

function sumEqualToZero(arr){
    let result=[]
    let maxlength=0;
    // let subArrLength=0
    let longestSubArr=[]
    for(let i=0;i<arr.length;i++){
        let sum=0;
        let subArr=[];
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            subArr.push(arr[j])
           
            if(sum===0){
               result.push([...subArr])
              
            //    subArrLength=Math.max(maxlength,subArr.length)// subarr ke sare length isme aa jynge
            if(subArr.length>maxlength){
                maxlength=subArr.length;
                
                longestSubArr=[...subArr]// qki copy kr rhe hai
            }
            }
        }
    }
  return {longestSubArr,maxlength}
}
console.log(sumEqualToZero([15, -2, 2, -8, 1, 7, 10, 23]))