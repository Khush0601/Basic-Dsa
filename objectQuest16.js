// return the highest marks obtained
const students = [
    { name: "Khushboo", marks: 89 },
    { name: "Ravi", marks: 75 },
    { name: "Pooja", marks: 95 },
    { name: "Aman", marks: 82 }
  ]

  function highestMarks(arr){
    let max=arr[0].marks;
    for(let i=0;i<arr.length;i++){
        if(arr[i].marks>max){
            max=arr[i].name;
        }
    }
    return max
  }
  console.log(highestMarks(students))