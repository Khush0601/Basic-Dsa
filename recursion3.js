let list=[8,9,12]
function recursion(arr,end,newArr){
    if(end<0){
        return newArr
    }
    newArr=[...newArr,arr[end]]
   end=end-1
    return recursion(arr,end,newArr)
}
console.log(recursion(list,list.length-1,[]))
// one way -top to bottom approach