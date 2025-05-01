//array of objects questions

let arr1=[
    {id:1,name:'shanu'},
    {id:2,name:'khushboo',age:23},
    {id:2,name:'ltr',address:'sksk'}
]

let arr2=[
    {id:1,class:1},
    {id:3,name:'khushboo',age:23}
]

function findUnique(arr1,arr2){
  let neww=[...arr1,...arr2];
  
  return neww
}

let mergelist=findUnique(arr1,arr2)
let obj={}
mergelist.forEach((el)=>{
    if(obj[el.id]){
      obj[el.id]={...obj[el.id],...el}
    }
    else{
        obj[el.id]=el
    }
})
console.log(Object.values(obj))