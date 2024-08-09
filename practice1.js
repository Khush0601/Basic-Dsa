//to get first n elem. of array
let arr=[7,9,0,-2]
function getEl(array,n){
    let result=[]
for(let i=0;i<=n-1;i++){
result.push(array[i])
}
return result
}
console.log(getEl(arr,3))