let data1=[20,30,45,67,87]
let data2=[5,98,67,34]
let data3=[]
for(let i=0;i<data1.length;i++){
    data3[i]=data1[i]
}
for(let i=0;i<data2.length;i++){
    data3[data1.length+i]=data2[i]
}
console.log(data3)