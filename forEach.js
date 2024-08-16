// foreach with array el
let arr=[2,3,5,7]
arr.forEach((el)=>{
    console.log(el)
})

// foreach with array of objects
let array=[
    {
      name:'khush',
      age:20,
    },
    {
        name:'khushi',
        age:20,
      },
      {
        name:'aman',
        age:23,
      },
]
array.forEach((students)=>{
    console.log(students.name)
})