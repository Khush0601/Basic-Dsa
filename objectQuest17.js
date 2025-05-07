//print all keys and its values

const student = {
    name: "Khushboo",
    age: 22,
    course: "Web Development"
};

function returnKeysValues(obj){
    
    for(let key in obj){
        console.log(`${key} and its value ${obj[key]}`)
    }
  
}
returnKeysValues(student)
