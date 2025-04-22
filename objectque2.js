//given arr of strings, write a fun. to return an object
// where the keys are the strings, and the values are the no. of times each string appers in the array.

const items=['apple','banana','apple','orange','banana','apple']

function countItems(arr){
let freq={}
for(let el of arr){
    if(freq[el]){
        freq[el]++
    }
    else{
        freq[el]=1
    }
}
return freq
}
console.log(countItems(items))