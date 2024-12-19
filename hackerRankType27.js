 // count Valley
 
 function CountValley(steps,path){
 let altitude=0;
 let valley=0;
 for(let i=0;i<steps;i++){
    if(path[i]==='U'){
        altitude++
    }
    if(path[i]==='D'){
        altitude--
    }
    if(altitude===0 && path[i]==='U'){
        valley++
    }
 }
 return valley

}
console.log(CountValley(8,'DDUUUUDD'))