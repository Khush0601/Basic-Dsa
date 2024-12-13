function merge(arr1,arr2){
  let newArr=[]
  for(let i=0;i<arr1.length;i++){
    newArr[i]=arr1[i]
    
  }
  for(let j=0;j<arr2.length;j++){
    newArr[arr1.length+j]=arr2[j]
  }
  return newArr
}
console.log(merge([1,2,3],[2,5,6]))