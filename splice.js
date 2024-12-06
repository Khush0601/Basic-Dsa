let arr=[1,2,3,4,5,6]

let b=arr.splice(0,4)
console.log(arr)
console.log(b)

// entries()

let obj={
    name:"khush",
    age:20
}
console.log(Object.entries(obj))

// for in ()
let objj={
    name:"khush",
    age:20
}
for(let key in objj){
    console.log(objj[key])
}