function rotateEl(arr,k){
  let restEl=arr.slice(k)
  let firstEl=arr.slice(0,k)
  return [...restEl,...firstEl]
}
console.log(rotateEl([1,2,3,4,5],2))