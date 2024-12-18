//Problem: Lonely Integer
// Problem Statement: You are given an array of integers. All the integers appear twice except for one. Find that lonely integer.

function findLonely(arr){
let obj={}
let unique;
for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
      obj[arr[i]]++
    }
    else{
        obj[arr[i]]=1
    }
}
for(let el in obj){
    // console.log(obj[el])
    if(obj[el]===1){
    unique=el
    }
   
}
return unique
}
console.log(findLonely([1,2,3,1,2]))