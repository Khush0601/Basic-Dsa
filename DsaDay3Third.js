// squaring of all array el
function squaring(arr){
    let b=[]
    for(let i=0;i<arr.length;i++){
      b[i]=arr[i]*2
    }
  return b
}
console.log(squaring([1,2,3,4]))