let data=[30,89,56,45,34]
let itemToDeletePosition=3
for(let i=itemToDeletePosition;i<data.length;i++){
    data[i]=data[i+1]
}
data.length=data.length-1
console.log(data)