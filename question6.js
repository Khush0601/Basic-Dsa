function search(arr,k){
 for(let i=0;i<arr.length;i++){
    if(arr[i]===k){
        return i
    }
 }
}
console.log(search([1,2,3,4,5],3))