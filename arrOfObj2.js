// to find the occurence of each object propertyin an arrayof obj

const products=[
    {id:1,category:'electronics'},
    {id:2,category:'furniture'},
    {id:3,category:'electronics'},
    {id:4,category:'clothing'},
    {id:5,category:'electronics'}
]
function findOcc(arr){
let newObj={}
for(let i=0;i<arr.length;i++){
    let category=arr[i].category
    if(newObj[category]){
       newObj[category]++
    }
    else{
        newObj[category]=1
    }
}
return newObj
}
console.log(findOcc(products))