// comapare two boys score :question of hackerRank
function compareTwo(arr1,arr2){
 let aliceScore=0;
 let bobScore=0;
 let noscore=0
 for(let i=0;i<arr1.length;i++){
   if(arr1[i]>arr2[i]){
    aliceScore++
   }
  if(arr2[i]>arr1[i]){
    bobScore++
  }
  if(arr1[i]===arr2[i]){
    noscore++
  }
}
 let obj={
    alicescore:aliceScore,
    bobscore:bobScore
 }
 return obj
}
console.log(compareTwo([5,6,7,11,12,6],[3,6,10,4,17,2]))