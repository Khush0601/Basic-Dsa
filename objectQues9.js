//filter object by value:
//write a fun. that takes n object and return a new object contaning onlythe key-value pairs where the value is greater than 50:

const scores={
    Alice:45,
    Bob:65,
    Charlie:90,
    David:32
}

function calculateScores(obj){
   let result={}
   for(let key in obj){
    if(obj[key]>50){
        result[key] = obj[key];
    }
   }
   return result
}
console.log(calculateScores(scores))