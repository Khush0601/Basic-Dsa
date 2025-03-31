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

for(let arr of newArr){
  let sum=0;
  for(let el of arr){
    sum+=el;
   
  }
  totalsum+=sum
}
return totalsum
}
console.log(printSubArray([1,2,3]))