 // question on linearSearch
 function linearSearch(arr,n){
let index;
for(let i=0;i<arr.length;i++){
    if(arr[i]===n){
        index=i
        break
    }
    else{
        index=-1
    }
}
return index
}
console.log(linearSearch([1,2,3,4,5],6))