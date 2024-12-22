// first non repeating letter
function nonRepeating(str){
let obj={}
let result=[];

for(let i=0;i<str.length;i++){
    let el=str[i]
    if(obj[el]){
        obj[el]++
    }
    else{
        obj[el]=1
    }
}
for(let keys in obj){
    if(obj[keys]===1){
       result.push(keys)
    }
}
return result[0]

}
console.log(nonRepeating('geeksforgeeks'))