function Climbing(arr1,arr2){
let uniqueArr=[...new Set(arr1)]
let result=[]
let rankfound=false;
let reversedArr=arr2.reverse()
for(let el of uniqueArr){
    for(let i=0;i<reversedArr.length;i++){
        if(el>=reversedArr[i]){
            rankfound=true
       result.push(i+2)
       break
        }
        if (!rankfound) {
            result.push(uniqueArr.length + 1); 
        }
    }
}
return result
}
console.log(Climbing([100,90,90,80],[70,80,105]))