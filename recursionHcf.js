function hcf(num1,num2){
    if(num1===0){
        return num2
    }
     else if(num2===0){
        return num1
    }
   else if(num1>num2){
        return hcf(num1-num2,num2)
    }
    else{
        return hcf(num2,num1-num2)
    }
   
}
console.log(hcf(27,51))