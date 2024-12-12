function birthday(arr,d,m){
    let subArr;
    let count=0
    let sumArrOfSubArr=[]
   let newSubArr=[] 
   let otherSubArr=[]
for(let i=0;i<arr.length;i++){
   subArr=arr.slice(i,m+i)
    
  if(subArr.length!==m){
    otherSubArr.push(subArr)
  }
  else{
    newSubArr.push(subArr)
    
  }
}
for(let el of newSubArr){
    let sum=0;
    for(nums of el){
        sum+=nums
    }
   
    if(sum===d){
        count++
       }
}
return count
}
console.log(birthday([1,2,1,3,2],3,2))