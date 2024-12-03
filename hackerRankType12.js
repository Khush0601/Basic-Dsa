//find the second largest unique num in an array of integer
function findSecondLargest(arr){
    let secondLargest;
 let same=arr.every((el)=>el===arr[0])
 if(same){
    return -1
 }
 else{
    let uniqueArr=[]
    let duplicateArr=[]
   let sortingArr=arr.sort((a,b)=>{
    if(a>b){
        return -1
    }
    if(a<b){
        return 1
    }
    if(a===b){
        return 0
    }
   })
   for(let element of sortingArr){
    if(uniqueArr.includes(element)){
        duplicateArr.push(element)
    }
    else{
        uniqueArr.push(element)
    }
   }
   secondLargest=uniqueArr[1]
 }
 return secondLargest
}
console.log(findSecondLargest([3,1,44,43,5,2,5]))