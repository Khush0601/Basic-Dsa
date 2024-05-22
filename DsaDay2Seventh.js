// slice method 
// by dsa
function newArray(arr,index1,index2){
    let result=[];
    let index=0;
for(let i=index1;i<index2;i++){
   result[index]= arr[i];
   index= index+1;
}
return result
}
console.log(newArray([1,2,3,4,5,6],2,5))

//by using slice
function slicingArray(ar,position1,position2){
   let b=ar.slice(position1,position2)
   return b
}
console.log(slicingArray([1,2,3,4,5,6],2,5))