// A very Big Sum
function findSum(arr){
 let sum=0;
 for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
 }
 return sum
}
console.log(findSum([100001,100003,500004,7999997]))