//check if both objects r same or not
function areObjectsEqual(obj1,obj2){
  const keys1=Object.keys(obj1)
  const keys2=Object.keys(obj2)

  if(keys1.length!==keys2.length){
    return false
  }

  for(let key of keys1){
    if(obj1[key]!==obj2[key]){
        return false
    }
  }
  return true
}
console.log(areObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));