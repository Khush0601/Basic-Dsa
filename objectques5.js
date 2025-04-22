//write a fun. that takes an object and returns a new object with keys and values swapped:

function swapKeysAndValues(obj){
  const swapped={};
  for(let key in obj){
    swapped[obj[key]]=key;
  }
  return swapped;
}
console.log(swapKeysAndValues({a:1,b:2,c:3}))