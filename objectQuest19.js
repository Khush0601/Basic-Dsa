// convert arr of obj. to single object by key:

const users = [
    { id: 1, name: "Khushboo" },
    { id: 2, name: "Riya" }
];

function convertArrOfObjects(arr){
    const result={}
    for(let key of arr){
        result[key.id]=key.name
    }
    return result
}

console.log(convertArrOfObjects(users))