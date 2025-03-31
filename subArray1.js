// print all the possible subarray
function printSubArray(arr){
let n=arr.length;
const newArr=[]
let totalsum=0
for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
      newArr.push(arr.slice(i,j+1))
      
    }
}


return newArr
}
console.log(printSubArray([1,2,3]))