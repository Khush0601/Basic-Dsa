//top k frequent el :agr ek arr mein boht el h toh jo unique el hai wo 2 pe kon hai
function kFrequent(arr,k){
 let uniqueArr=[]
 let duplicate=[]
 for(let i=0;i<arr.length;i++){
    if(uniqueArr.includes(arr[i])){
      duplicate.push(arr[i])
    }
    else{
        uniqueArr.push(arr[i])
    }
 }
 let result=uniqueArr.slice(0,k)
 return result

}
console.log(kFrequent([1,1,1,2,2,3],2))