// seperate the dataTypes in seperate seperate arrays
let data=[1,2,'hii',78,'hooo']
let arr1=[]
let arr2=[]
for(let i=0;i<data.length;i++){
 if(typeof data[i]==="number"){
    arr1.push(data[i])
 }
 else{
    arr2.push(data[i])
 }
}
console.log(arr1)
console.log(arr2)

d=data.slice(-1)
console.log(d)

