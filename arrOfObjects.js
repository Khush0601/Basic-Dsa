//to find the obj with the highest value from arr of obj

const items=[
    {name:'items1',price:10},
    {name:'items2',price:20},
    {name:'items3',price:40}

]
function findMax(arr){
 let max=arr[0]
for(el of arr){
    if(el.price>max.price){
        max=el
    }
}
return max
}
console.log(findMax(items))