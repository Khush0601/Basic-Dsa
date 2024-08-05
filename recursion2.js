// print elements of array 
let data=[1,2,3]
function recursion(arr,strt){
 if(strt>=arr.length){
    return
 }

 console.log(arr[strt])
 recursion(arr,strt+1)

}
recursion(data,0)