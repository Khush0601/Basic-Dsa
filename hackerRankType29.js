

// reverse every word :tomorrow complete it
function reverseSentence(str){
let words=str.split(" ")
let reverseWords=words.map((el,i)=>{
  return el.split('').reverse().join('')
})
return reverseWords.join(' ')
}
console.log(reverseSentence("you are good"))

