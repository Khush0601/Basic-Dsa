// arr of objects:
//gievn arr. of objects representing users,where each object contains the weres id,name,and score.
//write a fun. to return the name(s) of the users who have highest score.

const users=[
    {id:1,name:"alice",score:50},
    {id:2,name:"bob",score:75},
    {id:3,name:"charlie",score:75},
    {id:4,name:"david",score:60},
   
]

function findMaxScore(arr){
   let maxscore=arr[0].score;
   for(let i=0;i<arr.length;i++){
     if(arr[i].score>maxscore){
       maxscore=arr[i]
     }
   }
   return maxscore
}
console.log(findMaxScore(users))