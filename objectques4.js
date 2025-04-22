//write a fun. that takes an object and return the no. of keys in it.
function numOfKeys(obj){
    return Object.keys(obj).length;
}
console.log(numOfKeys({a:1,b:2,c:3}))