//division Sum pair


function division(arr,k){
    let newArr=[]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if((arr[i]+arr[j])%k===0){
            newArr.push([arr[i],arr[j]])
           
           
        }
    }
}
return newArr.length

}
console.log(division([1, 3, 2, 6, 1, 2],3))