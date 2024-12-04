function findSubArrays(arr,k){
   let parentArr=[]
   let a=[]
   let sumArr=[]
   for(let i=0;i<arr.length;i++){
    const subArr=arr.slice(i,i+k)
    if(subArr.length!==k){
        a.push(subArr)
    }
     else{
        parentArr.push(subArr)
     }
   }
   

   return parentArr
}
console.log(findSubArrays([1,2,3,4,5],4))