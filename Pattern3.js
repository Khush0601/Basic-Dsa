// pattern3-pyramid

for(let i=0;i<5;i++){
    for(let j=0;j<5-i-1;j++){
        process.stdout.write(" ")
    }
    for(let k=0;k<2*i+1;k++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}