//HackerLand University has the following grading policy:

// Every student receives a grade in the range 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor and likes to round grades according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round the grade up to the next multiple of 5.
// If the value of the grade is less than 38, no rounding occurs (the grade remains failing).
// The first line contains an integer, n, the number of students.
// Each of the next n lines contains an integer, grades[i], representing the grade of each student.
// Output Format:
// For each grade, print the rounded grade on a new line.

function gradingStudents(gradingArr){
    let newArr=[]
    let a=[]
 for(let i=0;i<gradingArr.length;i++){
    if(gradingArr[i]<38){
     newArr.push(gradingArr[i])
    }
    else{
        let nextMultipleOf5=Math.ceil(gradingArr[i]/5)*5
        let diff=Math.abs(gradingArr[i]-nextMultipleOf5)
        if(diff<3){
            newArr.push(nextMultipleOf5)
        }
        else{
            newArr.push(gradingArr[i])
        }
    }
 }
 return newArr
}
console.log(gradingStudents([4,73,67,38,33]))