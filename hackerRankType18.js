function findCount(s,t,a,b,arr1,arr2){
 let appleArray=[];
 let orangeArray=[];
 let applecount=0;
 let orangeCount=0;
 for(let i=0;i<arr1.length;i++){
    let sum=a;
    sum=sum+arr1[i]
    appleArray.push(sum)
 }
 for(let j=0;j<arr2.length;j++){
    let sum=b;
    sum=sum+arr2[j]
    orangeArray.push(sum)
 }
 

 for(let el of appleArray){
    if(el>=s && el<=t){
        applecount++
    }
 }
 for(let el of orangeArray){
    if(el>=s && el<=t){
        orangeCount++
    }
    
 }
 return `${applecount} ${orangeCount}`
}
console.log(findCount(7,11,5,15,3,2,[-2,2,1],[5,-6]))