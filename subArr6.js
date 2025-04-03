
// find the length of the longest subarray with a sum equal to zero.

function minLengthOfSubArr(arr,target){
    let minLength = Infinity;  // Store minimum length
    let shortestSubArr = [];
    
    for(let i=0;i<arr.length;i++){
        let sum=0;
        let subArr=[];
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            subArr.push(arr[j])
           
            if(sum===target){
            //    result.push([...subArr])
            //    subArrLength=Math.min(minlength,subArr.length)// ye jb bs maxlength return krna ho 
            if(subArr.length<minLength){
                minLength=subArr.length;
                
                shortestSubArr=[...subArr]// qki copy kr rhe hai
            }
            }
        }
    }
  return minLength === Infinity ? { shortestSubArr: [], minLength: 0 } : { shortestSubArr, minLength };
}
console.log(minLengthOfSubArr([15, -2, 2, -8, 1, 7, 10, 23],2))