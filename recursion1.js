// print elements of array in reverse form
let data=[1,2,3]
function recursion(arr,strt){
 if(strt>=arr.length){
    return
 }
 recursion(arr,strt+1)
 console.log(arr[strt])

}
recursion(data,0)
