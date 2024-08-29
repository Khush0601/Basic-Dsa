//given an arr ,return a newArray wwith a transformation applied to each el

const mapp=(arr)=>{
    let newArr=[]
for(let i=0;i<arr.length;i++){
    if(i===0){
        newArr.push(arr[i])
    }
    else{
        newArr.push(arr[i]+i)
    }
}
return newArr

}
console.log(mapp([1,5,7]))

