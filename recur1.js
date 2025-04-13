// recursion function for summ of array el
function add(arr){
 if(arr.length===0){
    return 0
 }








 
 let[firstEl,...rest]=arr

 return firstEl+add(rest)
}
console.log(add([1,2,3,4]))