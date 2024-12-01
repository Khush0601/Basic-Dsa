// pattern4
for(let i=0;i<5;i++){
    for(let j=0;j<i+1;j++){
        process.stdout.write("*")
    }
    for(let k=0;k<2*(5-i-1);k++){
        process.stdout.write(" ")
    }
    for(let l=0;l<i+1;l++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}