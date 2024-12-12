function scores(arr){
 let min=arr[0]
 let max=arr[0]
 let nocount=0
 let minCount=0
 let maxCount=0
 for(let i=0;i<arr.length;i++){
   if(arr[i]<min){
    min=arr[i]
    minCount++
   }
   
   if(arr[i]>max){
    max=arr[i]
    maxCount++
   }
  else{
    nocount++
  }
 }
 return `${maxCount} ${minCount}`
}
console.log(scores([3,4,21,36,10,28,35,5,24,42]))