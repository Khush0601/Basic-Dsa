// question on linear search
let data=[30,13,45,78,2,9,5,50]
let tofindIndexof=90
let index=undefined;
for(let i=0;i<data.length;i++){
    if(data[i]===tofindIndexof){
        index=i
        break
    }
}
console.log(index)

// using function
function linearSearch(arr,num){
let position=undefined;
for(let i=0;i<arr.length;i++){
    if(arr[i]===num){
        position=i
        break;
    }
  
}

return position
}
console.log(linearSearch(data,9))