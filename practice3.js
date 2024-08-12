// program to check whether str is blank or not
let str='hjj'
function findingBlank(strr){
    let result=''
if(strr.length===0){
 result='str is blank'
}
else{
    result='str is not blank'
}
return result
}
console.log(findingBlank(str))


// print array el greater than num given
function getEl(arr,num){
    let array=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            array.push(arr[i])
        }
    }
    return array
}
console.log(getEl([4,3,56,36,9],5))

// to get all vowels from string
function getVowel(str){
    let count=0
for(let i=0;i<str.length;i++){
if(str[i].includes('a') ||
str[i].includes('e') ||
str[i].includes('i')||
    str[i].includes('o') ||
    str[i].includes('u')
){

    count++
}
}
return count
}
console.log(getVowel('apnacollege'))

// generate random blw a range
let strt=100
let end=200
let diff=end-strt
let generateRandom=strt+(Math.floor(Math.random()*diff))
console.log(generateRandom)