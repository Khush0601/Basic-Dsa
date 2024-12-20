// reverse every word :tomorrow complete it
function reverseSentence(str){
let words=str.split(" ")
let reverseWords=words.map((el,i)=>{
  return el.split('').reverse().join('')
})
return reverseWords.join(' ')
}
console.log(reverseSentence("you are good"))

// alternate Mthod

function reverseSen(sentence){
 let arr=sentence.split(' ')
 let newArr=[]
 for(let i=0;i<arr.length;i++){
  let reverseWord='';
  for(let j=arr[i].length-1;j>=0;j--){
   
    reverseWord=reverseWord+arr[i][j]
   
  }
  newArr.push(reverseWord)
 }
 return newArr.join(' ')
}
console.log(reverseSen('You are cool'))
