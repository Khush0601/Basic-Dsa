function findIntersection(arr1,arr2){
let common=[]
let result='no common el';
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            common.push(arr1[i])
           
        }
        
    }
}
if(common.length>0){
 return common
}
else{
    return result
}

}
console.log(findIntersection([1,2],[3,4,5]))