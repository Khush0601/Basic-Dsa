//angry professor

function angryProfessor(k,arr){
 let arrivedOnTime=0;
 let arrivedLate=0;
 for(let i=0;i<arr.length;i++){
    if(arr[i]<=0){
        arrivedOnTime+=1
    }
    else{
        arrivedLate+=1
    }
 }
 return arrivedOnTime>=k?'NO':'YES'
}
console.log(angryProfessor(3,[-2,-1,0,1,2]))