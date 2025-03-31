// print all the possible subarray
function printSubArray(arr){
let n=arr.length;
for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
        console.log(arr.slice(i,j+1))
    }
}
}
printSubArray([1,2,3])