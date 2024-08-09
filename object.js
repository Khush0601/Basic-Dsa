// object
// created a object and accessing values
let student={
    name:"khush",
    age:12,
    subject:['dsa','js','backend']
}
// use of array method when need to store prop. in another variable
let marks='age'
console.log(student[marks])
// both ways to get values from object
console.log(student['name']) // array method
console.log(student.name) // dot method
console.log(student.subject[0])  // array method also used when there is  array in prop. of objects

// object key conversion
const obj={
    name:"a",
    2:'b',
    null:"c",
    true:"d"
}
console.log(obj[null]) // js automatically converted all keys into strings nd then matches with the obj
console.log(obj.true) // dot method works in all fails when keys in numbers

// updating the value of object
const student2={
    name:'shradha',
    age:23,
    marks:94,
    city:"delhi"
}
student2.city='mumbai'
student2.gender='female' // adding property to an object
delete student2.age // deleting property from object
console.log(student2)

// nested objects
const classInfo={
    aman:{
       grade:'A+',
       city:"delhi"
    },
    shradha:{
         grade:'A',
       city:"mumbai"
    },
    karan:{
         grade:'b',
       city:"kolkata"
    }

}
console.log(classInfo.aman.city)// accessing values by dot method
console.log(classInfo['aman']['grade']) //  accessing values by array method






