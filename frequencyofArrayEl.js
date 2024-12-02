// frequency of each el of array
let a=[1,3,4,2,4,7,5,8,1,2,3,2,3]
function frequencyofEl(arr){
 let obj={}
 
 for(let i=0;i<arr.length;i++){
   
    let el=arr[i]
   if(obj[el]){
      obj[el]++
    }
    else{
        obj[el]=1
    }
 }
 return obj
}
console.log(frequencyofEl(a))