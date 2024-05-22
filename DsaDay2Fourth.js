// find array includes or not 
// by using method 
function includesOrNot(arr,b){
    for(let i=0;i<arr.length;i++){
        return arr.includes(b)
    }
    }
    console.log(includesOrNot([1,2,3,4,5],44))
    //find by dsa
    
    function includedOrNot(ar,b){
     let lastResult=false;
     for(let i=0;i<ar.length;i++){
        if(ar[i]===b){
            lastResult=true
            break;
        }
        else{
            lastResult=false
        }
     }
     return lastResult
    }
    console.log(includedOrNot([1,2,3,4,5],4))