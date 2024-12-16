function BonAppetit(arr,k,b){
  let restArr;
  let sum=0
  let result;
 for(let i=0;i<arr.length;i++){
    restArr=arr.filter((val,i)=>{
     if(val!==arr[k]){
        return true
     }
   })
 }
 for(let j=0;j<restArr.length;j++){
   sum+=restArr[j]
 }
 let split=sum/2
 if(split===b){
  result='Bon Apetite'
 }
 else{
    result=Math.abs(split-b)
 }

 return result
}
console.log(BonAppetit([3,10,2,9],2,12))