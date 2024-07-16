 // Dsa question on obj
 let obj={
    name:"khush",
    age:21,
    class1:'90%',
    class2:'93%',
    class3:'95%',

}
let array1=[]
let arry2=[]
let a=Object.entries(obj)

// for(let i=0;i<a.length;i++){
//     if(a[i][0].includes('class')){
//         array1.push(a[i][1])
//     }
//     else{
//         arry2.push(a[i][1])
//     }
// }

for(let key in obj){

    if(key[0]==='c'){
     array1.push(obj[key])
    }else{
        arry2.push(obj[key])
    }

}
console.log(array1)
console.log(arry2)