// function to add some no. to each of the array el
function addEl(arr){
    let b=[]
 for(let i=0;i<arr.length;i++){
    b[i]=arr[i]+8
 }
 return b
}
console.log(addEl([1,2,3,4]))