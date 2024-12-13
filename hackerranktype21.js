//Given an array of bird sightings where every element represents a 
// bird type id, determine the id of the most frequently sighted type. 
// If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
//1 2 3 4 5 4 3 2 1 3 4
// Sample Output 3


function migratoryBirds(arr){
  let obj={}
  let max;
  for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
     obj[arr[i]]++
    }
    else{
     obj[arr[i]]=1
    }

  }
  max=Object.values(obj)[0]
 for(let key in obj){
    if(obj[key]>max){
     max=key
    }
 }
  return max

}
console.log(migratoryBirds([1,2,3,4,5 ,4, 3 ,2, 1 ,3 ,4]))