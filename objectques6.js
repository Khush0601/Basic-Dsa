//merge  objects:
function mergeObjects(obj1,obj2){
    return {...obj1,...obj2}
}
const obj1={a:1,b:2}
const obj2={b:3,c:4}
console.log(mergeObjects(obj1,obj2))

//alternate method:

function mergeObjects(obj1,obj2,obj3){
    const merged={};
    //copy properties from obj1:
    for(let key in obj1){
        merged[key]=obj1[key]
    }
    //copy properties of obj2:
    for(let key in obj2){
        merged[key]=obj2[key]
    }
    for(let key in obj3){
        merged[key]=obj3[key]
    }
    return merged;
}
const objj1={a:1,b:2}
const objj2={b:3,c:4}
const objj3={d:5,e:6}
console.log(mergeObjects(objj1,objj2,objj3))
